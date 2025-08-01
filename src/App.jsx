import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import HomePage from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import DodgesRoles from "./pages/DodgesRoles";
import ReviSport from "./pages/ReviSport";
import MemorysCube from "./pages/MemorysCube";
import BigPen from "./pages/BigPen";
// import "./App.css";

function App() {

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/dodges-roles" element={<DodgesRoles />} />
        <Route path="/revis-sport" element={<ReviSport />} />
        <Route path="/memorys-cube" element={<MemorysCube />} />
        <Route path="/big-pen" element={<BigPen />} />
      </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;