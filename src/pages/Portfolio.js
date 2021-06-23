import React from "react";
import Image from "react-bootstrap/Image";
import "../App.css";
import Button from "react-bootstrap/Button";
import dailyPlanner from "../images/dailyplannerscreenshot.png";

function Portfolio() {
  return (
    <div className="portfolio">
      {/* PLANNER */}
      <div className="plan-div">
        <h3 className="label">Daily Planner</h3>
        <img src={dailyPlanner} className="thumbnail" alt="Daily Planner" />
        <div className="btn">
          <Button
            variant="outline-light"
            type="button"
            className="github-btn"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://github.com/Arob7/Daily-Planner.git";
            }}
          >
            GITHUB
          </Button>{" "}
          <Button
            variant="outline-light"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://arob7.github.io/Daily-Planner/";
            }}
          >
            WEBSITE
          </Button>{" "}
        </div>
      </div>
      {/* PEDALPALS */}
      <div className="pedalpals">
        <h3 className="label">PedalPals (Bike Share App)</h3>
        <Image
          src={require("../images/appscreenshot.JPG")}
          className="thumbnail"
        />
        <div className="btn">
          <Button
            variant="outline-light"
            type="button"
            className="github-btn"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://github.com/DeMarcoHeath/project2.git";
            }}
          >
            GITHUB
          </Button>{" "}
          <Button
            variant="outline-light"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://sheltered-temple-43461.herokuapp.com/";
            }}
          >
            WEBSITE
          </Button>{" "}
        </div>
      </div>

      {/* PASSWORD */}
      <div className="password">
        <h3 className="label">Password Generator</h3>
        <Image
          src={require("../images/passwordscreenshot.PNG")}
          className="thumbnail"
        />
        <div className="btn">
          <Button
            variant="outline-light"
            type="button"
            className="github-btn"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://github.com/Arob7/password-generator.git";
            }}
          >
            GITHUB
          </Button>{" "}
          <Button
            variant="outline-light"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://arob7.github.io/password-generator/";
            }}
          >
            WEBSITE
          </Button>{" "}
        </div>
      </div>

      {/* HIKING */}
      <div className="hiking">
        <h3 className="label">Hiking Trail/Weather Dashboard</h3>
        <Image
          src={require("../images/project1screenshot.png")}
          className="thumbnail"
        />
        <div className="btn">
          <Button
            variant="outline-light"
            type="button"
            className="github-btn"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://github.com/Scottiss/project-1.git";
            }}
          >
            GITHUB
          </Button>{" "}
          <Button
            variant="outline-light"
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
      {/* BUDGET */}
      <div className="budget">
        <h3 className="label">Budget App</h3>
        <Image
          src={require("../images/budgetscreenshot.JPG")}
          className="thumbnail"
        />
        <div className="btn">
          <Button
            variant="outline-light"
            type="button"
            className="github-btn"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://github.com/Arob7/offline-budget-tracker";
            }}
          >
            GITHUB
          </Button>{" "}
          <Button
            variant="outline-light"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://glacial-wave-04506.herokuapp.com/";
            }}
          >
            WEBSITE
          </Button>{" "}
        </div>
      </div>

      {/* FITNESS */}
      <div className="fitness">
        <h3 className="label">Fitness Tracker</h3>
        <Image
          src={require("../images/fitnesstracker.JPG")}
          className="thumbnail"
        />
        <div className="btn">
          <Button
            variant="outline-light"
            type="button"
            className="github-btn"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://github.com/Arob7/Workout-Tracker";
            }}
          >
            GITHUB
          </Button>{" "}
          <Button
            variant="outline-light"
            type="button"
            className="github-btn"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://fast-inlet-26547.herokuapp.com/";
            }}
          >
            WEBSITE
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
