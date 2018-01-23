import React from "react";
import {
  compose,
  dropLast,
  filter,
  has,
  identity,
  ifElse,
  insert,
  keys,
  map,
  split,
  trim
} from "ramda";
import { List, Segment } from "semantic-ui-react";

import { isDesktop } from "../../utilities/device-detection";
import Cursor from "../Cursor";
import LanguagesTag from "../LanguagesTag";
import Path from "../Path";
import Prompt from "../Prompt";
import SourceLink from "../SourceLink";
import TerminalHeader from "../TerminalHeader";
import TerminalNavItem from "../TerminalNavItem";

import "./Terminal.css";

const buildPromptLines = text =>
  compose(
    lines =>
      lines.map((line, i) => (
        <div key={"promptLine" + i}>
          <code>
            <Prompt />
            {line}
            {lines.length - 1 === i ? <Cursor /> : ""}
          </code>
        </div>
      )),
    filter(text => text.length > 0),
    map(trim),
    split("\n")
  )(text);

class Terminal extends React.Component {
  constructor(props) {
    super(props);

    this.invisibleTerminal = null;
  }

  buildNavMenu(obj, showBack, header, headerStyle) {
    const buildComponent = (item, name) => {
      const { id, type } =
        item === "back"
          ? { id: "back", type: "back", content: ".." }
          : { id: name, type: item.starred ? "star" : "circle", content: name };

      return (
        <TerminalNavItem
          onClick={() => this.onMenuItemClick(id)}
          key={id}
          lang={item.lang}
          type={type}
        >
          {item === "back" ? ".." : name}
        </TerminalNavItem>
      );
    };

    return compose(
      items => <List>{items}</List>,
      ifElse(
        items => items.length > 0 && header,
        insert(
          0,
          <TerminalHeader key="header" style={headerStyle}>
            {header}
          </TerminalHeader>
        ),
        identity
      ),
      ifElse(() => !!showBack, insert(0, buildComponent("back")), identity),
      ifElse(
        has("text"),
        () => [],
        compose(map(k => buildComponent(obj[k], k)), k => [...k].sort(), keys)
      )
    )(obj);
  }

  getMenuMaybe(force = false) {
    const { menu, menuItem } = this.props;

    if (!force && !this.readyToShowMenus()) {
      return;
    }

    const selected = menuItem.reduce((result, item) => result[item], {
      ...menu
    });

    return this.buildNavMenu(selected, menuItem.length > 0, "Navigation");
  }

  readyToShowMenus() {
    return this.props.fullText.length <= this.props.charCount - 1;
  }

  onMenuItemClick(item) {
    const { menuItem, menu } = this.props;
    const newMenuItem =
      item === "back" ? dropLast(1, menuItem) : [...menuItem, item];
    const selected = newMenuItem.reduce((result, item) => result[item], menu);

    this.props.navigate(newMenuItem, selected);
  }

  componentDidMount() {
    this.props.initialize(this.props.greeting);
  }

  render() {
    const { menuItem, fullText, charCount, url, lang } = this.props;
    const shownPromptLines = buildPromptLines(fullText.slice(0, charCount));
    const allPromptLines = buildPromptLines(fullText);

    let meta = [];

    const currentPath =
      menuItem.length > 0 ? <Path menuItem={menuItem} /> : null;

    if (url) {
      meta.push(<SourceLink key="source-link" url={url} />);
    }

    if (lang) {
      meta.push(<LanguagesTag key="languages" lang={lang} />);
    }

    return (
      <div className="Terminal">
        <div
          className="terminalPlaceholder"
          ref={ref => (this.invisibleTerminal = ref)}
        >
          <Segment inverted raised size={isDesktop() ? "large" : "small"}>
            {currentPath && <div className="currentPath">{currentPath}</div>}
            {meta.length > 0 && <div className="meta">{meta}</div>}
            {allPromptLines.length > 0 && (
              <div className="content">{allPromptLines}</div>
            )}
            {this.getMenuMaybe(true)}
          </Segment>
        </div>
        <div className="terminalBody">
          <Segment
            inverted
            raised
            style={{
              minHeight: this.invisibleTerminal
                ? this.invisibleTerminal.scrollHeight
                : 0
            }}
            size={isDesktop() ? "large" : "small"}
          >
            {currentPath && <div className="currentPath">{currentPath}</div>}
            {meta.length > 0 && <div className="meta">{meta}</div>}
            {shownPromptLines.length > 0 && (
              <div className="content">{shownPromptLines}</div>
            )}
            {this.getMenuMaybe()}
          </Segment>
        </div>
      </div>
    );
  }
}

export default Terminal;
