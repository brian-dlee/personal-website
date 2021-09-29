import React from "react";
import { dropLast } from "ramda";

import Meta from "./Meta";
import TerminalBody from "./TerminalBody";
import TerminalContent from "./TerminalContent";
import TerminalNavMenu from "./TerminalNavMenu";
import { Context as TerminalContext } from "./context/Terminal";

import "./Terminal.css";

const Terminal = ({ greeting, menu }) => {
  const { charCount, fullText, menuItem, url, lang, initialize, navigate } = React.useContext(TerminalContext)

  React.useEffect(() => {
    initialize(greeting)
  }, [greeting])

  const onMenuItemClick = item => {
    const newMenuItem = item === "back" ? dropLast(1, menuItem) : [...menuItem, item];
    const selected = newMenuItem.reduce((result, item) => result[item], menu);
    navigate(newMenuItem, selected);
  }

  const getMenuMaybe = () => {
    if (fullText.length > charCount - 1) {
      return;
    }

    const selected = menuItem.reduce((result, item) => result[item], {
      ...menu
    });

    return (
      <TerminalNavMenu
        showBack={menuItem.length > 0}
        menuItems={selected.text ? {} : selected}
        onClick={onMenuItemClick}
      />
    );
  }

  return (
    <div className="Terminal">
      <TerminalBody menu={getMenuMaybe()} meta={<Meta path={menuItem} url={url} lang={lang} />}>
        <TerminalContent visibleLength={charCount}>
          {fullText}
        </TerminalContent>
      </TerminalBody>
    </div>
  );
}

export default Terminal;
