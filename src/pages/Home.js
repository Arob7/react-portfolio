import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import "../App.css";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <div className="home">
      <Card>
        <Card.Body>
          <Image
            className="photo"
            src={require("../images/profile.jpg")}
            roundedCircle
          />

          <h1>Hello!</h1>
          <h2>My name is Arion Robinson.</h2>
          <h3>Frontend Web Developer</h3>
          <p>
            I am a graduate from Michigan State University's Full Stack Web
            Development Boot Camp. I have held a variety of positions, my
            passion is creating new things and challenging myself. I want to
            enhance my skills through continuous learning, self-development and
            creativity.
          </p>
          <Button
            variant="outline-light"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://docs.google.com/document/d/1Qyg-3dlbi2YalSOQUhfvpTHu5gVGEJhuuUAcdMY8Ovs/edit?usp=sharing";
            }}
          >
            RESUME
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
