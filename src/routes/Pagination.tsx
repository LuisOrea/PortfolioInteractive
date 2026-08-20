import { BrowserRouter, Routes, Route } from "react-router";
import Loading from "../pages/Loading";
import Initializer from "../pages/Initializer";
import SharedCanvasLayout from "../Escenas3D/CanvasGlobal";
import Home from "../pages/Home";
import { SectionProvider } from "../context/UiContext";

export default function Pagination() {
  return (
    <SectionProvider>
      <BrowserRouter>
        <div className="h-screen">
          <Routes>
            <Route path="/" element={<Loading />} />
            <Route element={<SharedCanvasLayout />}>
              <Route path="/init" element={<Initializer />} />
              <Route path="/home" element={<Home />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </SectionProvider>
  );
}
