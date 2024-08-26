import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Fitmee Web App"
              description="I spearheaded the development of the Fitmee Web App using the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js, to ensure a seamless and functional application. I implemented a comprehensive authentication system to secure user access and data. The backend architecture was designed to support a variety of fitness functionalities, such as workout routines, yoga, and meditation sessions, catering to diverse user needs. Additionally, I designed and integrated a user profile section that allows users to track their progress, set fitness goals, and customize their workout plans based on BMI filtering, thus enhancing personalization and engagement."
              ghLink="https://github.com/bansalNik1322/Fitmee"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="NikBlog Web App"
              description="I designed the NikBlogAPP using JavaScript and Node.js, incorporating a user-friendly template engine (EJS) to facilitate the creation and sharing of a variety of blogs, thereby offering an engaging experience for both readers and authors. To enhance user convenience, I implemented seamless Google and Facebook sign-in options. Registered users can like and comment on blog posts, fostering an active and interactive community. Additionally, I ensured robust authentication mechanisms to guarantee the security and privacy of user profiles and their interactions within the platform."
              ghLink="https://github.com/bansalNik1322/NikBlogWeb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Nomad Web App"
              description="I authored a dynamic food website using CSS, JavaScript, Node.js, and React, which highlights a wide range of culinary experiences, including street food, food festivals, and top restaurants across various cities. The platform is designed to be user-friendly, allowing food enthusiasts to easily share information about restaurants, food festivals, and street food, as well as upload their own culinary stories. Additionally, I integrated a weather forecasting feature that provides up-to-date weather information on each city's page, enhancing the user experience and assisting in travel planning."
              ghLink="https://github.com/bansalNik1322/FoodWebsite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="PDF ChatBot"
              description="I developed an NLP-powered tool that extracts text structure from PDFs and leverages Google's AI models to generate diverse and customizable test questions. This tool significantly saves educators time and reduces human bias. Additionally, I implemented an innovative web application that converts PDFs into engaging test sets, promoting deeper learning through personalized questions and real-time feedback."
              ghLink="https://github.com/bansalNik1322/PDF-Chat-Bot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="NodeJS CRUD"
              description="I developed a comprehensive survey form project that captures various types of data from users and performs CRUD (Create, Read, Update, Delete) operations on it. The project allows users to submit detailed survey responses, which are then processed and managed efficiently. Users can create new entries, view existing responses, update information, and delete records as needed. This robust system ensures seamless data management and provides valuable insights by organizing and analyzing user feedback."
              ghLink="https://github.com/bansalNik1322/Node-Contact-Form"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="MERN Authentication"
              description="I implemented a secure authentication system using the MERN stack (MongoDB, Express.js, React.js, Node.js). The project features a robust authentication mechanism that manages user registration, login, and session management. It employs JSON Web Tokens (JWT) for secure user authentication and authorization, ensuring that sensitive data is protected. The system supports user account creation and verification, password hashing, and role-based access control. This setup provides a seamless and secure user experience, safeguarding user information and managing access efficiently across the application."
              ghLink="https://github.com/bansalNik1322/MERN-Authentication"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
