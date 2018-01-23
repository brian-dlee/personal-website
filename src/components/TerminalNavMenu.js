import React from "react";
import PropTypes from "prop-types";
import { List } from "semantic-ui-react";
import { compose, mapObjIndexed, values } from "ramda";

import TerminalNavHeader from "./TerminalNavHeader";
import TerminalNavItem from "./TerminalNavItem";

const TerminalNavMenu = ({ showBack, menuItems, onClick }) => {
  const buildMenuItemComponents = compose(
    values,
    mapObjIndexed(({ lang, starred }, title) => (
      <TerminalNavItem
        onClick={() => onClick(title)}
        key={title}
        lang={lang}
        type={starred ? "star" : "circle"}
      >
        {title}
      </TerminalNavItem>
    ))
  );

  return (
    <List>
      <TerminalNavHeader>Navigation</TerminalNavHeader>
      {showBack && (
        <TerminalNavItem onClick={() => onClick("back")} type="back">
          ..
        </TerminalNavItem>
      )}
      {buildMenuItemComponents(menuItems)}
    </List>
  );
};

TerminalNavMenu.defaultProps = {
  showBack: false
};

TerminalNavMenu.propTypes = {
  menuItems: PropTypes.shape({
    lang: PropTypes.arrayOf(PropTypes.string),
    starred: PropTypes.bool
  }).isRequired,
  showBack: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default TerminalNavMenu;
