import { TanStackProvider } from "@monorepo/core";
import { Header } from "../widgets/header";
import Finance from "mfe_finance/Finance";
import { Viewer } from "../widgets/viewer"; // Viewer 페이지 컴포넌트 예시
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <TanStackProvider>
        <Header />

        {/* Routes 정의 */}
        <Routes>
          <Route path="/" element={<Finance />} />
          <Route path="/viewer" element={<Viewer />} />
          <Route path="*" element={<Finance />} /> {/* 기본 페이지 */}
        </Routes>
      </TanStackProvider>
    </BrowserRouter>
  );
}
