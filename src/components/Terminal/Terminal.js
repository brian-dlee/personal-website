import React from "react";
import { dropLast } from "ramda";

import Meta from "../Meta";
import TerminalBody from "../TerminalBody";
import TerminalContent from "../TerminalContent";
import TerminalNavMenu from "../TerminalNavMenu";

import "./Terminal.css";

class Terminal extends React.Component {
  getMenuMaybe(force = false) {
    const { charCount, fullText, menu, menuItem } = this.props;

    if (!force && fullText.length > charCount - 1) {
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
    const meta = <Meta path={menuItem} url={url} lang={lang} />;

    return (
      <div className="Terminal">
        <TerminalBody menu={this.getMenuMaybe()} meta={meta}>
          <TerminalContent visibleLength={charCount}>
            {fullText}
          </TerminalContent>
        </TerminalBody>
      </div>
    );
  }
}

export default Terminal;
