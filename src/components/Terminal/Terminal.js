import React from "react";
import { dropLast } from "ramda";

import Meta from "../Meta";
import TerminalBody from "../TerminalBody";
import TerminalContent from "../TerminalContent";
import TerminalNavMenu from "../TerminalNavMenu";

import "./Terminal.css";

class Terminal extends React.Component {
  constructor(props) {
    super(props);

    this.placeholder = null;
  }

  getMenuMaybe(force = false) {
    const { menu, menuItem } = this.props;

    if (!force && !this.readyToShowMenus()) {
      return;
    }

    const selected = menuItem.reduce((result, item) => result[item], {
      ...menu
    });

    return (
      <TerminalNavMenu
        showBack={menuItem.length > 0}
        menuItems={selected.text ? {} : selected}
        onClick={this.onMenuItemClick}
      />
    );
  }

  readyToShowMenus() {
    return this.props.fullText.length <= this.props.charCount - 1;
  }

  onMenuItemClick = item => {
    const { menuItem, menu } = this.props;
    const newMenuItem =
      item === "back" ? dropLast(1, menuItem) : [...menuItem, item];
    const selected = newMenuItem.reduce((result, item) => result[item], menu);

    this.props.navigate(newMenuItem, selected);
  };

  componentDidMount() {
    this.props.initialize(this.props.greeting);
  }

  render() {
    const { menuItem, fullText, charCount, url, lang } = this.props;
    const shownPromptLines = (
      <TerminalContent>{fullText.slice(0, charCount)}</TerminalContent>
    );
    const allPromptLines = <TerminalContent>{fullText}</TerminalContent>;
    const meta = <Meta path={menuItem} url={url} lang={lang} />;

    return (
      <div className="Terminal">
        <TerminalBody
          className="terminalPlaceholder"
          containerRef={ref => (this.placeholder = ref)}
          menu={this.getMenuMaybe(true)}
          meta={meta}
        >
          {allPromptLines}
        </TerminalBody>
        <TerminalBody
          menu={this.getMenuMaybe()}
          meta={meta}
          height={this.placeholder ? this.placeholder.scrollHeight : 0}
        >
          {shownPromptLines}
        </TerminalBody>
      </div>
    );
  }
}

export default Terminal;
