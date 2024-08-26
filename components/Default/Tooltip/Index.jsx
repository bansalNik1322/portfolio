import React, { memo } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function index({ text, children }) {
  const renderTooltip = (props) => (
    <Tooltip
      id={
        text.toLowerCase().replace(/\s/g, "") +
        Math.floor(Math.random() * 10000)
      }
      {...props}
    >
      {text}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      {children}
    </OverlayTrigger>
  );
}

export default memo(index);
