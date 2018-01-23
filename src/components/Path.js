import React from "react";
import PropTypes from "prop-types";

import colors from "../theme/colors";

const Path = ({ menuItem }) => (
  <div key={"promptLine-3"}>
    <code style={{ color: colors.yellow }}>{menuItem.join(" > ")}</code>
  </div>
);

Path.propTypes = {
  menuItem: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Path;
