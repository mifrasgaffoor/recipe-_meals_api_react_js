import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Cards from "./components/Card/Cards";
import Footer from "./components/Footer/Footer";


const App = () => {

 
  return (
    <div className="main__container">
      <Navbar />
      <Cards   />
      <Footer/>
    </div>
  );
};

export default App;
