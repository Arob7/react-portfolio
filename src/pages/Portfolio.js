import React, { useReducer, useRef } from "react";
import Image from "react-bootstrap/Image";
import "../index.css";
// import Card from "react-bootstrap/Card";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="container text-center">
        <Image src={require("../images/dailyplannerscreenshot.png")} fluid />
        <div></div>
        <Image src={require("../images/appscreenshot.JPG")} fluid />
        <br></br>
        <Image src={require("../images/passwordscreenshot.PNG")} fluid />
        <br></br>
        <Image src={require("../images/project1screenshot.png")} fluid />
      </div>
    </div>
  );
}

export default Portfolio;
