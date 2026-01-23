import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import { Routes, Route, Link } from "react-router";

// import { Routes } from "react-router-dom";

function App() {
  return (
    <>
      <>
        <Navbar />
        {/*  */}
      </>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
