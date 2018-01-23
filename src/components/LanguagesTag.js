import React from "react";
import PropTypes from "prop-types";

import colors from "../theme/colors";

const LanguagesTag = ({ lang }) => (
  <div key={"promptLine-1"}>
    <code style={{ color: colors.green }}>Languages: {lang.join(", ")}</code>
  </div>
);

LanguagesTag.propTypes = {
  lang: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default LanguagesTag;
