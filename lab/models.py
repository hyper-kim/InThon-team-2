from django.db import models

# 1. '연구실 프로필' 모델 (The "One")
#    (기존 LabInfo에서 이름 변경 및 open_position 필드 제거)
class LabProfile(models.Model):
    lab_name = models.CharField(
        max_length=100, 
        verbose_name="연구실 이름"
    )
    schedule_info = models.TextField(
        blank=True, 
        verbose_name="면담 가능 시간",
        help_text="예: 매주 금요일 오후 (커피챗 환영)"
    )

    def __str__(self):
        return self.lab_name

# 2. '모집 공고' 모델 (The "Many")
class JobPosting(models.Model):
    # [핵심] LabProfile 모델과 1:N 관계 설정
    lab = models.ForeignKey(
        LabProfile, 
        on_delete=models.CASCADE, # 랩이 삭제되면, 공고도 함께 삭제
        verbose_name="연구실"
    )
    
    title = models.CharField(
        max_length=200, 
        verbose_name="공고 제목"
    )
    description = models.TextField(
        verbose_name="상세 내용",
        help_text="모집 대상, 필요 역량, 기간 등 자세한 내용을 적어주세요."
    )
    attachment = models.FileField(
        upload_to='job_postings/', # 'media/' 폴더 하위에 'job_postings/' 폴더를 만들어 저장
        blank=True,               # 파일 첨부는 선택 사항
        verbose_name="첨부파일 (PDF 등)"
    )

    
    deadline = models.DateField(
        null=True, 
        blank=True, 
        verbose_name="모집 마감일"
    )
    
    created_at = models.DateTimeField(
        auto_now_add=True, 
        verbose_name="작성일"
    )

    def __str__(self):
        return f"[{self.lab.lab_name}] {self.title}"