
  import React from 'react';
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";
  import { BrowserRouter } from 'react-router-dom'; // [!!!] 1. 임포트
  createRoot(document.getElementById("root")!).render(<React.StrictMode>
    <BrowserRouter> {/* [!!!] 2. <App />을 감싸줍니다 */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);