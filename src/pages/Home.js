import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import "../App.css";
import Button from "react-bootstrap/Button";

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
          <Button
            variant="dark"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://docs.google.com/document/d/1Qyg-3dlbi2YalSOQUhfvpTHu5gVGEJhuuUAcdMY8Ovs/edit?usp=sharing";
            }}
          >
            RESUME
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Home;
