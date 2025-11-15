import os
import requests
from urllib.parse import urljoin, unquote
from bs4 import BeautifulSoup
import re


def is_pdf(file_content):
    return file_content.startswith(b"%PDF-")

def replace_to_pdf_ad_hoc(url):
    arxiv_www_match = re.match(r"(https?://www\.arxiv\.org)/abs/(\d+\.\d+)", url)
    if arxiv_www_match:
        return f"{arxiv_www_match.group(1)}/pdf/{arxiv_www_match.group(2)}" 
    
    arxiv_abs_match = re.match(r"(https?://arxiv\.org)/abs/(\d+\.\d+)", url)
    if arxiv_abs_match:
        return f"{arxiv_abs_match.group(1)}/pdf/{arxiv_abs_match.group(2)}"

    ieee_doc_match = re.match(r"(https?://ieeexplore\.ieee\.org)/document/(\d+)", url)
    if ieee_doc_match:
        return f"{ieee_doc_match.group(1)}/stamp/stamp.jsp?tp=&arnumber={ieee_doc_match.group(2)}"
    
    return url

def download_pdfs_advanced(save_dir, url):
    # Create the save directory if it doesn't exist
    if not os.path.exists(save_dir):
        os.makedirs(save_dir)

    try:
        # Get the main page content
        page_response = requests.get(url, timeout=10)
        page_response.raise_for_status()
        soup = BeautifulSoup(page_response.text, "html.parser")

        # Find all hyperlinks
        links = soup.find_all("a", href=True)

        links = list(set(links))

        if not links:
            print("No links found on the provided URL.")
            return

        print(f"Found {len(links)} links. Checking each one for PDF content...")
        pdf_count = 0

        for link in links:
            if pdf_count >= 5:
                break
            link_href = link.get("href")
            absolute_url = urljoin(url, link_href)

            absolute_url = replace_to_pdf_ad_hoc(absolute_url)

            try:
                # First, try a HEAD request to check the Content-Type header
                head_response = requests.head(
                    absolute_url, allow_redirects=True, timeout=5
                )
                content_type = head_response.headers.get("content-type", "").lower()

                # If the server tells us it's a PDF, we can be more confident
                if "application/pdf" in content_type:
                    is_potential_pdf = True
                # If the content type is generic, we'll have to check the magic number
                elif "application/octet-stream" in content_type or not content_type:
                    is_potential_pdf = True
                else:
                    is_potential_pdf = False

                if not is_potential_pdf:
                    print(f"Skipping (Content-Type not PDF): {absolute_url}")
                    continue

                # Stream the response to download chunk by chunk
                with requests.get(absolute_url, stream=True, timeout=10) as r:
                    r.raise_for_status()

                    # Read the first few bytes to check the magic number
                    first_bytes = r.raw.read(1024)

                    if is_pdf(first_bytes):
                        print(f"Confirmed PDF by magic number: {absolute_url}")
                        pdf_count += 1

                        # --- Determine the filename ---
                        # Try to get filename from 'Content-Disposition' header
                        content_disposition = r.headers.get("content-disposition")
                        if content_disposition:
                            fname_match = re.search(
                                r'filename="?([^"]+)"?', content_disposition
                            )
                            if fname_match:
                                pdf_filename = fname_match.group(1)
                            else:
                                pdf_filename = os.path.basename(
                                    unquote(absolute_url.split("?")[0])
                                )
                        else:
                            # Otherwise, get it from the URL
                            pdf_filename = os.path.basename(
                                unquote(absolute_url.split("?")[0])
                            )

                        # Ensure filename has a .pdf extension
                        if not pdf_filename.lower().endswith(".pdf"):
                            pdf_filename += ".pdf"

                        save_path = os.path.join(save_dir, pdf_filename)

                        # Save the file
                        with open(save_path, "wb") as f:
                            f.write(first_bytes)  # Write the bytes we already read
                            for chunk in r.iter_content(chunk_size=8192):
                                f.write(chunk)
                        print(f"Successfully downloaded and saved as: {pdf_filename}")
                    else:
                        print(
                            f"Skipping (not a PDF based on magic number): {absolute_url}"
                        )

            except requests.exceptions.RequestException as e:
                print(f"Could not process link {absolute_url}. Reason: {e}")

        print(f"\nScan complete. Downloaded {pdf_count} PDF files.")

    except requests.exceptions.RequestException as e:
        print(f"Error fetching the main URL: {e}")


def download_intro(save_file, urls):
    parsed_content = ""
    for link in urls:
        print(f"Extracting content from: {link}")
        content = extract_body_content(link)
        content = " ".join(map(lambda s: s.strip(), content.split("\n")))
        content = re.sub(r"https?://\S+|www\.\S+", "", content)
        content = re.sub(r"\s+", " ", content)
        parsed_content += content + "\n"

    with open(save_file, "w", encoding="utf-8") as f:
        f.write(parsed_content)


def fetch_html(url):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }
    try:
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        return response.text
    except requests.exceptions.RequestException as e:
        print(f"Error fetching URL {url}: {e}")
        return None


def parse_markdown_tags(html_content):
    if not html_content:
        return ""

    # Define the list of HTML tags that correspond to Markdown elements
    markdown_tags = [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "ul",
        "ol",
        "li",
        "a",
        "img",
        "strong",
        "em",
        "b",
        "i",  # 'b' and 'i' are often used for bold/italic
        "code",
        "pre",
        "blockquote",
        "hr",
        "table",
        "thead",
        "tbody",
        "tr",
        "th",
        "td",
    ]

    soup = BeautifulSoup(html_content, "html.parser")

    content_elements = soup.find_all(markdown_tags)

    if not content_elements:
        print("No Markdown-related tags found on the page.")
        main_content = soup.find("main") or soup.find("article") or soup.body
        if main_content:
            content_elements = main_content.find_all(markdown_tags)
        if not content_elements:
            return "Could not find any of the target tags."

    simplified_html = "\n".join(str(tag.prettify()) for tag in content_elements)

    return simplified_html


def merge_inline_text(html_content):
    if not html_content:
        return ""
    soup = BeautifulSoup(html_content, "lxml")
    text = soup.get_text(separator=" ", strip=True)
    return text


def extract_body_content(url):
    html = fetch_html(url)
    parsed_content = parse_markdown_tags(html)
    parsed_content = merge_inline_text(parsed_content)
    return parsed_content
