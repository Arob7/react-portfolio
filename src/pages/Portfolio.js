import React from "react";
import Image from "react-bootstrap/Image";
import "../index.css";
import Button from "react-bootstrap/Button";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="container text-center">
        <h3>DAILY PLANNER</h3>
        <Image
          src={require("../images/dailyplannerscreenshot.png")}
          thumbnail
        />
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
        <h3>BIKE SHARE CONCEPT APP</h3>
        <Image src={require("../images/appscreenshot.JPG")} thumbnail />
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
        <h3>PASSWORD GENERATOR</h3>
        <Image src={require("../images/passwordscreenshot.PNG")} thumbnail />
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
        <h3>HIKING TRAIL LOCATOR</h3>
        <Image src={require("../images/project1screenshot.png")} thumbnail />
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
        <h3>BUDGET APP</h3>
        <Image src={require("../images/budgetscreenshot.JPG")} thumbnail />
        <Button
          variant="dark"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://github.com/Arob7/offline-budget-tracker";
          }}
        >
          GITHUB
        </Button>{" "}
        <Button
          variant="dark"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://glacial-wave-04506.herokuapp.com/";
          }}
        >
          WEBSITE
        </Button>{" "}
        <h3>FITNESS TRACKER</h3>
        <Image src={require("../images/fitnesstracker.JPG")} thumbnail />
        <Button
          variant="dark"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://github.com/Arob7/Workout-Tracker";
          }}
        >
          GITHUB
        </Button>{" "}
        <Button
          variant="dark"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://fast-inlet-26547.herokuapp.com/";
          }}
        >
          WEBSITE
        </Button>
      </div>
    </div>
  );
}

export default Portfolio;
