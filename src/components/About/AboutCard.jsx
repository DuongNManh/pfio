import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="blue">Duong Nguyen Manh.</span>
            <br />
            <br />
            I’m a dedicated <span className="blue">Software Engineer</span> with a passion for creating applications that people love to use. I’m always eager to learn new technologies and take on challenges that push me to grow.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Going For Walks And Exploring Nature 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(109, 162, 223)" }}>
            "Work Hard to create things that matter."{" "}
          </p>
          <footer className="blockquote-footer">DuongNManh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
