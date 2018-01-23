import React from "react";
import PropTypes from "prop-types";

import LanguagesTag from "./LanguagesTag";
import Path from "./Path";
import SourceLink from "./SourceLink";

const Meta = ({ path, url, lang }) => (
  <div className="meta">
    {path.length > 0 && <Path className="currentPath" path={path} />}
    {url && <SourceLink key="source-link" url={url} />}
    {lang.length > 0 && <LanguagesTag key="languages" lang={lang} />}
  </div>
);

Meta.defaultProps = {
  path: [],
  url: null,
  lang: []
};

Meta.propTypes = {
  path: PropTypes.any,
  url: PropTypes.any,
  lang: PropTypes.any
};

export default Meta;
