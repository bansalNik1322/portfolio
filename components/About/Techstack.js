import React from "react";
import { Col, Row } from "react-bootstrap";
import Tooltip from "../Default/Tooltip/Index";
import { FaHtml5, FaNode, FaPython, FaReact } from "react-icons/fa";
import { DiJavascript1, DiMongodb, DiGit, DiCss3 } from "react-icons/di";
import {
  SiRedis,
  SiNextdotjs,
  SiPostgresql,
  SiNestjs,
  SiMysql,
  SiTypescript,
  SiMicrosoftsqlserver,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Tooltip text="JavaScript">
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
      </Tooltip>

      <Tooltip text="Python">
        <Col xs={4} md={2} className="tech-icons">
          <FaPython />
        </Col>
      </Tooltip>

      <Tooltip text="MySQL">
        <Col xs={4} md={2} className="tech-icons">
          <SiTypescript />
        </Col>
      </Tooltip>

      <Tooltip text="NodeJS">
        <Col xs={4} md={2} className="tech-icons">
          <FaNode />
        </Col>
      </Tooltip>

      <Tooltip text="React">
        <Col xs={4} md={2} className="tech-icons">
          <FaReact />
        </Col>
      </Tooltip>

      <Tooltip text="NextJS">
        <Col xs={4} md={2} className="tech-icons">
          <SiNextdotjs />
        </Col>
      </Tooltip>

      <Tooltip text="NestJS">
        <Col xs={4} md={2} className="tech-icons">
          <SiNestjs />
        </Col>
      </Tooltip>

      <Tooltip text="Git">
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
        </Col>
      </Tooltip>

      <Tooltip text="Redis">
        <Col xs={4} md={2} className="tech-icons">
          <SiRedis />
        </Col>
      </Tooltip>

      <Tooltip text="HTML">
        <Col xs={4} md={2} className="tech-icons">
          <FaHtml5 />
        </Col>
      </Tooltip>

      <Tooltip text="CSS">
        <Col xs={4} md={2} className="tech-icons">
          <DiCss3 />
        </Col>
      </Tooltip>

      <Tooltip text="MongoDB">
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
        </Col>
      </Tooltip>

      <Tooltip text="PostGres">
        <Col xs={4} md={2} className="tech-icons">
          <SiPostgresql />
        </Col>
      </Tooltip>

      <Tooltip text="MySQL">
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
        </Col>
      </Tooltip>

      <Tooltip text="SQL Server">
        <Col xs={4} md={2} className="tech-icons">
          <SiMicrosoftsqlserver />
        </Col>
      </Tooltip>
    </Row>
  );
}

export default Techstack;
