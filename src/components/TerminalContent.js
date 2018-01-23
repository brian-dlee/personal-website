import React from "react";
import PropTypes from "prop-types";
import { compose, filter, map, split, trim } from "ramda";

import PromptLine from "./PromptLine";

const toPromptLines = compose(
  lines =>
    lines.map((line, i) => (
      <PromptLine key={`line${i}`} showCursor={lines.length - 1 === i}>
        {line}
      </PromptLine>
    )),
  filter(text => text.length > 0),
  map(trim),
  split("\n")
);

const TerminalContent = ({ children }) => <div>{toPromptLines(children)}</div>;

TerminalContent.propTypes = {
  children: PropTypes.string.isRequired
};

export default TerminalContent;
