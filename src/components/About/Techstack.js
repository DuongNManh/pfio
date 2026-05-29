import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs } from "react-icons/si";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Csharp from "../../Assets/TechIcons/csharp.svg";
import Rabbitmq from "../../Assets/TechIcons/Rabbitmq.svg";
import ASPNET from "../../Assets/TechIcons/NETCore.svg";
import ZimaOS from "../../Assets/TechIcons/zimaos.svg";
import Dozzle from "../../Assets/TechIcons/Dozzle.svg";
import Portainer from "../../Assets/TechIcons/Portainer.svg";
import Shadcn from "../../Assets/TechIcons/Shadcn.svg";
import Flutter from "../../Assets/TechIcons/Flutter.svg";
import JavaScript from "../../Assets/TechIcons/Javascript.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Csharp} alt="C#" />
        <div className="tech-icons-text">C#</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ASPNET} alt=".NET Core" />
        <div className="tech-icons-text">.NET Core</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={JavaScript} alt="javascript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" />
        <div className="tech-icons-text">Typescript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Redux} alt="redux" />
        <div className="tech-icons-text">Redux</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs fontSize={"24px"} />
        <div className="tech-icons-text">Next.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Flutter} alt="flutter" />
        <div className="tech-icons-text">Flutter</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="firebase" />
        <div className="tech-icons-text">Firebase</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">PostgreSql</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="mongoDb" />
        <div className="tech-icons-text">Mongo DB</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Redis} alt="redis" />
        <div className="tech-icons-text">Redis</div>
      </Col>

      {/* <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col> */}

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Shadcn} alt="shadcn" />
        <div className="tech-icons-text">Shadcn</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={MUI} alt="mui" />
        <div className="tech-icons-text">Material UI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Rabbitmq} alt="RabbitMQ" className="tech-icon-images" />
        <div className="tech-icons-text">RabbitMQ</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ZimaOS} alt="ZimaOS" className="tech-icon-images" />
        <div className="tech-icons-text">ZimaOS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Portainer} alt="Portainer" className="tech-icon-images" />
        <div className="tech-icons-text">Portainer</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Dozzle} alt="Dozzle" className="tech-icon-images" />
        <div className="tech-icons-text">Dozzle</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col>

    </Row>
  );
}

export default Techstack;
