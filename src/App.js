import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import 'font-awesome/css/font-awesome.min.css';
import './App.css'
import Carousel from "./Components/Carousel";

function App() {
  return (
    <div className="App">
     
<div className=".text1">
  <p className="text-center">Welcome To Our Carousel Website<br/>Have a nice Stay! </p>
  <p className="text-center">Click on the RED or BLUE box to move... </p>
  </div> 

<Carousel/>





    </div>
  );
}

export default App;
