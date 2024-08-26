import React from "react";

import Tooltip from "../Default/Tooltip/Index";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiNpm,
  SiSwagger,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Tooltip text="VS Code">
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
      </Tooltip>
      <Tooltip text="Postman">
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
      </Tooltip>
      <Tooltip text="Vercal">
        <Col xs={4} md={2} className="tech-icons">
          <SiVercel />
        </Col>
      </Tooltip>
      <Tooltip text="NPM">
        <Col xs={4} md={2} className="tech-icons">
          <SiNpm />
        </Col>
      </Tooltip>
      <Tooltip text="Swagger">
        <Col xs={4} md={2} className="tech-icons">
          <SiSwagger />
        </Col>
      </Tooltip>
    </Row>
  );
}

export default Toolstack;
