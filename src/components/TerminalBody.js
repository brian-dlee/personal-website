import React from "react";
import PropTypes from "prop-types";
import { Segment } from "semantic-ui-react";
import { identity } from "ramda";

import { isDesktop } from "../utilities/device-detection";

const TerminalBody = ({
  children,
  className,
  containerRef,
  height,
  menu,
  meta
}) => {
  const style = height ? { minHeight: height } : {};

  return (
    <div className={className} ref={ref => containerRef(ref)} style={style}>
      <Segment inverted raised size={isDesktop() ? "large" : "small"}>
        {meta.length > 0 && <div className="meta">{meta}</div>}
        <div className="content">{children}</div>
        {menu}
      </Segment>
    </div>
  );
};

TerminalBody.defaultProps = {
  className: "terminalBody",
  containerRef: identity,
  height: null,
  menu: null
};

TerminalBody.propTypes = {
  children: PropTypes.node.isRequired,
  containerRef: PropTypes.func,
  className: PropTypes.string,
  height: PropTypes.number,
  menu: PropTypes.element,
  meta: PropTypes.element.isRequired
};

export default TerminalBody;
