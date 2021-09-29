import React from "react";
import PropTypes from "prop-types";
import { Icon, List } from "semantic-ui-react";

import colors from "../theme/colors";

const getColor = type => {
  if (type === "star") {
    return colors.red;
  }

  return colors.grey;
};

const getIcon = type => {
  switch (type) {
    case "star":
      return "star";
    case "back":
      return "arrow left";
    default:
      return "circle outline";
  }
};

const TerminalNavItem = ({ children, lang, type, onClick }) => (
  <List.Item className="navItem" onClick={onClick}>
    <a href={`#item-${type}`}>
      <Icon
        size="small"
        style={{ color: getColor(type) }}
        name={getIcon(type)}
      />
      {children}
      {lang.length > 0 && (
        <i style={{ color: colors.green }}>
          <small>{` - ${lang.join(", ")}`}</small>
        </i>
      )}
    </a>
  </List.Item>
);

TerminalNavItem.defaultProps = {
  lang: [],
  type: "circle"
};

TerminalNavItem.propTypes = {
  children: PropTypes.node.isRequired,
  starred: PropTypes.bool,
  lang: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.oneOf(["back", "circle", "star"])
};

export default TerminalNavItem;
