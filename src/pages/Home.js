import React, { useReducer, useRef } from "react";
import Card from "react-bootstrap/Card";

function Home() {
  return (
    <div className="container text-center">
      <Card>
        <Card.Body>
          <img src={require("../images/profile.jpg")}></img>
          Hello! My name is Arion Robinson. I am attending Michigan State
          University's Full Stack Web Development Boot Camp and graduate
          November 2020. I have held a variety of positions, my passion is
          creating new things and challenging myself. <br></br>I want enhance my
          skills through continuous learning, self-development and creativity.
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
