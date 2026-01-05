import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Banner from "./components/banner/banner";
import Programs from "./components/programs/programs";

// import { Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Programs />
      <Footer />
      {/* <Routes></Routes> */}
    </>
  );
}

export default App;
