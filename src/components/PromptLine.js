import React from "react";
import PropTypes from "prop-types";

import Cursor from "./Cursor";
import Prompt from "./Prompt";

const PromptLine = ({ children, showCursor }) => (
  <div>
    <code>
      <Prompt />
      {children}
      {showCursor ? <Cursor /> : ""}
    </code>
  </div>
);

PromptLine.defaultProps = {
  showCursor: false
};

PromptLine.propTypes = {
  children: PropTypes.node.isRequired,
  showCursor: PropTypes.bool
};

export default PromptLine;
