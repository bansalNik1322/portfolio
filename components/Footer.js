import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiCodingninjas, SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container
      fluid
      className="footer"
      style={{
        marginBottom: "40px",
      }}
    >
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Nikhil Bansal</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} NB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/bansalNik1322"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/nikhil-bansal-768315243/"
                style={{ color: "white" }}
                target="_blank"
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
              >
                <SiCodingninjas />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
