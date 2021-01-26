import React from "react";
import Form from "react-bootstrap/Form";
import "../index.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../App.css";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <div className="contact">
      <div className="container text-left">
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control as="textarea" placeholder="Name" />
          </Form.Group>
          {""}
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          {""}
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Type message here..."
              rows={3}
            />
            {""}
          </Form.Group>
          <Button
            variant="dark"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "#";
            }}
          >
            SEND
          </Button>{" "}
        </Form>
      </div>
      <div className="contact-me">
        <Card.Title>Find me at:</Card.Title>

        <ListGroup className="list-group-flush">
          <Card.Link href="https://github.com/Arob7">Github: Arob7</Card.Link>
          <Card.Link href="https://www.linkedin.com/in/arion-robinson-331436101/">
            LinkedIn: Arion Robinson
          </Card.Link>
          <Card.Link href="https://twitter.com/CodeName_Arob">
            Twitter: CodeName_Arob
          </Card.Link>
        </ListGroup>
        <p>Phone: 313-870-8766</p>
        <p>Email:Arobinson9008@gmail.com</p>
      </div>
    </div>
  );
}

export default Contact;
