import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
import Demo from "./pages/Demo/Demo";
import About from "./pages/About/About"; // ✅ أضف السطر ده
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.js';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/about" element={<About />} /> {/* ✅ كده تمام */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
