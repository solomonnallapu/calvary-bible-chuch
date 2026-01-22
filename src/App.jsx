import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Banner from "./components/banner/banner";
import Programs from "./components/programs/programs";
import About from "./components/about/about";
import Home from "./components/home/home";
import { Routes, Route, Link } from "react-router";

// import { Routes } from "react-router-dom";

function App() {
  return (
    <>
      <>
        <Navbar />
        <Banner />
        <Programs />
        <Footer />
      </>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
