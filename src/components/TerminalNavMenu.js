import React from "react";
import PropTypes from "prop-types";
import { List } from "semantic-ui-react";
import { compose, map, sortBy, toPairs, values } from "ramda";

import TerminalNavHeader from "./TerminalNavHeader";
import TerminalNavItem from "./TerminalNavItem";

const TerminalNavMenu = ({ showBack, menuItems, onClick }) => {
  const buildMenuItemComponents = compose(
    values,
    map(pair => (
      <TerminalNavItem
        onClick={() => onClick(pair[0])}
        key={pair[0]}
        lang={pair[1].lang}
        type={pair[1].starred ? "star" : "circle"}
      >
        {pair[0]}
      </TerminalNavItem>
    )),
    sortBy(pair => (pair[1].starred ? "0" : "1") + pair[0].toLowerCase()),
    toPairs
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
