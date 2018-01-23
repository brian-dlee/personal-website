import React from "react";
import PropTypes from "prop-types";

import Cursor from "./Cursor";
import Prompt from "./Prompt";

import "./PromptLine.css";

const PromptLine = ({ hidden, showCursor, visible }) => (
  <div className={`prompt-line ${visible.trim().length === 0 && "hidden"}`}>
    <code>
      <Prompt />
      <span className="visible">{visible}</span>
      <span className="hidden">{hidden}</span>
      {showCursor ? <Cursor /> : ""}
    </code>
  </div>
);

PromptLine.defaultProps = {
  showCursor: false
};

PromptLine.propTypes = {
  hidden: PropTypes.string.isRequired,
  showCursor: PropTypes.bool,
  visible: PropTypes.string.isRequired
};

export default PromptLine;
