import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import HomePage from "./pages/Home";
import Activity from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
// import "./App.css";

function App() {

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Activity />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;