import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import CatGif from "../../Assets/catdayGIF.gif";
import Walker from "../Walker/Walker";
import { leftGifs, rightGifs } from "../Walker/characterGifs";

function About() {
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section page-walker-host">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", color: "black" }}>
                Who <strong className="">I Am</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={CatGif} alt="about" className="img-fluid rounded-5" />
            </Col>
          </Row>
          <h1 className="project-heading">
            Professional <strong className="green">Skillset </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="green">Tools</strong> I use
          </h1>
          <Toolstack />
        </Container>
        <Walker leftGifs={leftGifs} rightGifs={rightGifs} />
      </Container>
    </>
  );
}

export default About;
