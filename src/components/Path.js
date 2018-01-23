import React from "react";
import PropTypes from "prop-types";

import colors from "../theme/colors";

const Path = ({ path }) => (
  <div className="path">
    <code style={{ color: colors.yellow }}>{path.join(" > ")}</code>
  </div>
);

Path.propTypes = {
  path: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Path;
