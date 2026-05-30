import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import myImg from "../../Assets/ava.jpg";
import Tilt from "react-parallax-tilt";
import Walker from "../Walker/Walker";
import { leftGifs, rightGifs } from "../Walker/characterGifs";
import {
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section about-section page-walker-host" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 10 }} className="heading-name">
                Duong Nguyen Manh
              </h1>
              <p style={{ fontSize: "1.15rem", marginBottom: 10 }}>
                Full Stack Developer · Backend (ASP.NET) · Web (ReactJS) · Mobile (Flutter)
              </p>
              <div className="home-about-body" style={{ paddingTop: 10 }}>
                I enjoy turning ideas into systems that make sense—backend. Services built with
                ASP.NET, intuitive interfaces in React, and mobile experiences in Flutter. My
                experience across frontend, backend, mobile, and currently exploring DevOps, gives me a balanced view
                of how a product should work as a whole. I’m always eager to learn new technologies and take on challenges that push me to grow.
              </div>
            </Col>
            <Col md={5} className="myAvtar" style={{ paddingTop: 0, paddingBottom: 20 }}>
              <Tilt>
                <img src={myImg} className="img-fluid rounded-circle" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="blue strong">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/DuongNManh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/duong-nguyen-b0391229a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/manhduong.nguyen.731"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Walker leftGifs={leftGifs} rightGifs={rightGifs} />
    </section>
  );
}

export default Home;
