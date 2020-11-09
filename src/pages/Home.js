import React, { useReducer, useRef } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import "../App.css";
// import Jumbotron from "react-bootstrap/Jumbotron";

function Home() {
  return (
    <div className="home">
      <div className="container text-center">
        <Card>
          <Card.Body>
            <Image
              className="photo"
              src={require("../images/profile.jpg")}
              roundedCircle
            />
            <br></br>
            Hello! My name is Arion Robinson.
            <br></br>I am attending Michigan State University's Full Stack Web
            Development Boot Camp and graduate November 2020.
            <br></br>I have held a variety of positions, my passion is creating
            new things and challenging myself.
            <br></br>I want enhance my skills through continuous learning,
            self-development and creativity.
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Home;
