import React, { useReducer, useRef } from "react";
import Image from "react-bootstrap/Image";
import "../index.css";
import Button from "react-bootstrap/Button";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="container text-center">
        <Image src={require("../images/dailyplannerscreenshot.png")} fluid />
        <Button
          variant="dark"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://github.com/Arob7/Daily-Planner.git";
          }}
        >
          GITHUB
        </Button>{" "}
        <Button
          variant="dark"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://arob7.github.io/Daily-Planner/";
          }}
        >
          WEBSITE
        </Button>{" "}
        <Image src={require("../images/appscreenshot.JPG")} fluid />
        <Button
          variant="dark"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://github.com/DeMarcoHeath/project2.git";
          }}
        >
          GITHUB
        </Button>{" "}
        <Button
          variant="dark"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://sheltered-temple-43461.herokuapp.com/";
          }}
        >
          WEBSITE
        </Button>{" "}
        <Image src={require("../images/passwordscreenshot.PNG")} fluid />
        <Button
          variant="dark"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://github.com/Arob7/password-generator.git";
          }}
        >
          GITHUB
        </Button>{" "}
        <Button
          variant="dark"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://arob7.github.io/password-generator/";
          }}
        >
          WEBSITE
        </Button>{" "}
        <Image src={require("../images/project1screenshot.png")} fluid />
        <Button
          variant="dark"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://github.com/Scottiss/project-1.git";
          }}
        >
          GITHUB
        </Button>{" "}
        <Button
          variant="dark"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://scottiss.github.io/project-1";
          }}
        >
          WEBSITE
        </Button>{" "}
      </div>
    </div>
  );
}

export default Portfolio;
