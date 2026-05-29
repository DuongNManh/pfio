import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import taskgenix from "../../Assets/Projects/taskgenix.png";
import postblog from "../../Assets/Projects/postblog.jpg";
import snakeaid from "../../Assets/Projects/snakeaid.jpg";
import umaquizrun from "../../Assets/Projects/uma.jpg";
import koiauction from "../../Assets/Projects/koiauction.jpg";
import alohamarket from "../../Assets/Projects/alohamarket.jpg";
import Walker from "../Walker/Walker";
import { leftGifs, rightGifs } from "../Walker/characterGifs";

function Projects() {
  return (
    <Container fluid className="project-section about-section page-walker-host">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="">Works </strong>
        </h1>
        <p style={{ color: "blue" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snakeaid}
              isBlog={false}
              title="SnakeAid"
              description="Cross-platform rescue & medical support system for snakebite incidents featuring AI-driven snake identification, first aid guidance, video consultation, and SOS coordination."
              ghLink="https://github.com/snake-AID"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={postblog}
              isBlog={false}
              title="My Personal Blog"
              description="My personal blog page build with Angular.js and Tailwind Css which takes the content from makdown files and renders. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/DuongNManh/Post_Management.git"
              demoLink="https://post.dnmanh.id.vn"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alohamarket}
              isBlog={false}
              title="Aloha Market"
              description="Online marketplace platform for buying and selling second-hand items. Built with React for the frontend and ASP.NET Core for the backend, it offers a user-friendly interface, secure transactions, and efficient item management. The platform includes features such as user authentication, product listings, search functionality, and a messaging system for seamless communication between buyers and sellers."
              ghLink="https://github.com/AlohaMarket"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={umaquizrun}
              isBlog={false}
              title="Umaquiz Run"
              description="Funny quiz game inspired by the popular game Umamusume: Pretty Derby in asset, endless runner and quiz game style. Users can choose from a variety of characters, and answer a series of questions to keep their character running and earn points. The game features vibrant graphics, engaging gameplay, and a wide range of quiz topics to test players' knowledge while having fun."
              ghLink="https://github.com/DuongNManh/UmaQuizRun.git"
              demoLink="https://duongnmanh.github.io/UmaQuizRun/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskgenix}
              imgStyle={{ maxWidth: "150px", width: "70%", margin: "0 auto", display: "block" }}
              isBlog={false}
              title="TaskGenix"
              description="Using 'Speech Recognition' for the detection user needs, convert to actionable notes and tasks. Enabled management in personal workspace and team workspace."
              ghLink="https://github.com/TaskGenix"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={koiauction}
              isBlog={false}
              title="Koi Auction"
              description="Online auction platform for buying and selling koi fish. Built with React for the frontend and Java Springboot for the backend, it offers a user-friendly interface, secure transactions, and efficient item management. The platform includes features such as user authentication, product listings, search functionality, and a bidding system for buyers and sellers."
              ghLink="https://github.com/fkoi88"
              demoLink="https://kap-six.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
      <Walker leftGifs={leftGifs} rightGifs={rightGifs} />
    </Container>
  );
}

export default Projects;
