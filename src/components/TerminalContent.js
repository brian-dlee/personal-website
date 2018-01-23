import React from "react";
import PropTypes from "prop-types";

import PromptLine from "./PromptLine";
import { getContent } from "../utilities/terminal-helper";

const TerminalContent = ({ children, visibleLength }) => (
  <div className="content">
    {getContent(children, visibleLength).map((l, i) => (
      <PromptLine key={`line${i}`} visible={l.visible} hidden={l.hidden} />
    ))}
  </div>
);

TerminalContent.propTypes = {
  children: PropTypes.string.isRequired,
  visibleLength: PropTypes.number.isRequired
};

export default TerminalContent;
