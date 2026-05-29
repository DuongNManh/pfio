import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Duong_Nguyen_SE_Resume.pdf";
import { AiFillGithub, AiFillFacebook, AiOutlineMail, AiOutlineDownload } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Walker from "../Walker/Walker";
import { leftGifs, rightGifs } from "../Walker/characterGifs";

function ResumeNew() {
  return (
    <div>

      <Container fluid className="resume-section about-section page-walker-host">
        <Particle />

        <Container className="resume-content-shell">
          <Row className="justify-content-center align-items-center resume-message-row">
            <Col md={9} className="text-center">
              <h2 className="resume-message-title">
                I'm always looking for new opportunities and collaborations.
              </h2>
              <p className="resume-message-body">
                Feel free to reach out if you'd like to work together — I'm open to discussing
                new projects and collaborations.
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "14px",
                  flexWrap: "wrap",
                  marginTop: "22px",
                }}
              >
                <a
                  href="mailto:manhduonglhp4@gmail.com"
                  className="resume-mail-icon home-social-icons"
                  aria-label="Email me"
                  title="Email me"
                  style={{ width: 84, height: 84, fontSize: "2rem" }}
                >
                  <AiOutlineMail />
                </a>
                <span style={{ fontSize: "1.1rem", fontWeight: 500, color: "#111111" }}>
                  manhduonglhp4@gmail.com
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                  marginTop: "24px",
                }}
              >
                <a
                  href={pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="View or download resume"
                  title="View / Download Resume"
                >
                  <AiOutlineDownload />
                </a>
                <a
                  href="https://github.com/DuongNManh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  style={{ marginRight: 12 }}
                >
                  <AiFillGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/duong-nguyen-b0391229a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  style={{ marginRight: 12 }}
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.facebook.com/manhduong.nguyen.731"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        <Walker leftGifs={leftGifs} rightGifs={rightGifs} />
      </Container>
    </div>
  );
}

export default ResumeNew;
