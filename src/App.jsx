import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ResultsPortal from "./pages/ResultsPortal";

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resultados" element={<ResultsPortal />} />
      </Routes>
      <Footer />
    </div>
  );
}
