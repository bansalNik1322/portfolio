import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiCodingninjas, SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I'm Nikhil Bansal, a passionate Full Stack Developer with a
              keen interest in creating innovative web technologies and
              products.
              <br />
              <br />
              I hold a B.Tech in Electronics and Communication Engineering from
              JECRC, and my educational background has honed my technical skills
              and problem-solving abilities.
              <br />
              <br />I am proficient in a range of technologies including
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, Python, React, Node.js/Express.js, HTML, CSS,
                  Next.js, NestJS
                </b>
              </i>
              .
              <br />
              <br />I am proficient in a Database Systems Like
              <i>
                <b className="purple">
                  {" "}
                  MongoDB, Mysql, Postgres, and SQL Server
                </b>
              </i>
              .
              <br />
              <br />
              My field of interests spans
              <i>
                <b className="purple"> Web Technologies and Blockchain </b>
              </i>
              . I enjoy applying my skills to build scalable applications and
              innovative solutions.
              <br />
              <br />
              My recent role as a Full Stack JavaScript Developer at Dotsquares
              allowed me to develop dynamic web applications using{" "}
              <b className="purple">Next.js</b> and{" "}
              <b className="purple">Nest.js</b>, enhancing my expertise in these
              frameworks.
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/bansalNik1322"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-social-icons icon-colour"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nikhil-bansal-768315243/"
                  style={{ color: "white" }}
                  target="_blank"
                  className="home-social-icons icon-colour"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/Nikiiii/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-social-icons icon-colour"
                >
                  <SiLeetcode />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://auth.geeksforgeeks.org/user/bansalnikhilntg"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-social-icons icon-colour"
                >
                  <SiGeeksforgeeks />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.naukri.com/code360/profile/2e9b10a3-e3d9-45c3-b964-7676c7fd2f18"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-social-icons icon-colour"
                >
                  <SiCodingninjas />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
