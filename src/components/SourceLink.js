import React from "react";
import PropTypes from "prop-types";

import colors from "../theme/colors";

const SourceLink = ({ url }) => (
  <div key={"promptLine-2"}>
    <code style={{ color: colors.purple }}>
      URL: <a href={url}>{url}</a>
    </code>
  </div>
);

SourceLink.propTypes = {
  url: PropTypes.string.isRequired
};

export default SourceLink;
