import React from "react";
import PropTypes from "prop-types";
import { List } from "semantic-ui-react";
import colors from "../theme/colors";

const TerminalHeader = ({ children, style }) => (
  <List.Item style={{ color: colors.grey, ...style }} key="listHeader">
    {children}
  </List.Item>
);

TerminalHeader.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object
};

export default TerminalHeader;
