import React, { Component } from 'react';
import { Icon, List, Segment } from 'semantic-ui-react';

import { isDesktop } from '../utilities/device-detection';
import Cursor from './Cursor';
import Prompt from './Prompt';

import './Terminal.css';

const colors = {
  grey: '#818181',
  green: '#5d9165',
  yellow: '#bbba30',
  purple: '#a36aca',
  blue: '#4384ec',
  red: '#b4303d',
};

const getPromptLines = text => {
  const lines = text.split('\n');

  return lines.map((line, i) => {
    if (line.trim().length === 0) return null;

    return (
      <div key={'promptLine' + i}>
        <code><Prompt/>{line}{lines.length - 1 === i ? <Cursor/> : ''}</code>
      </div>
    );
  }).filter(line => !!line);
};

const getRandomTime = () => Math.random() * 10;

class Terminal extends Component {
  constructor() {
    super();

    this.terminal = null;
    this.invisibleTerminal = null;

    this.state = {
      fullText: '',
      charCount: 0,
      menuItem: [],
      autoscroll: false
    };
  }

  buildNavMenu = (obj, showBack, header, headerStyle) => {
    const items = [];

    if (showBack)
      items.push(
        <List.Item className="navItem" key="back" onClick={() => this.onMenuItemClick('back')}>
          <a>
            <Icon
              style={{color: colors.grey}}
              size="small"
              name="arrow left" />
            ..
          </a>
        </List.Item>
      );

    if (!obj.text) {
      Object.keys(obj).sort().forEach(item =>
        items.push(
          <List.Item className="navItem" key={item} onClick={() => this.onMenuItemClick(item)}>
            <a>
              <Icon
                size="small"
                style={{color: obj[item].starred ? colors.red : colors.grey}}
                name={obj[item].starred ? "star" : "circle outline"}/>
              {item}
              <i style={{color: colors.green}}>
                <small>{obj[item].lang && ` - ${obj[item].lang.join(', ')}`}</small>
              </i>
            </a>
          </List.Item>
        )
      );
    }

    if (items.length > 0 && header)
      items.unshift(
        <List.Item style={{color: colors.grey, ...headerStyle}} key="listHeader">
          {`${header}`}
        </List.Item>
      );

    return <List>{items}</List>;
  };

  getMenuMaybe = (force=false) => {
    const { menuItem } = this.state;

    if (!force && !this.readyToShowMenus())
      return;

    let selected = { ...this.props.menu };

    menuItem.forEach(item => selected = selected[item]);

    return this.buildNavMenu(
      selected,
      menuItem.length > 0,
      'Navigation'
    );
  };

  readyToShowMenus = () =>
    this.state.fullText.length <= this.state.charCount - 1;

  setShellUpdateTimeout = () => {
    setTimeout(this.writeNextCharacter.bind(this), getRandomTime());
  };

  writeNextCharacter = () => {
    const newCharCount = this.state.charCount + 1;

    this.setState({
      charCount: newCharCount
    });

    if (newCharCount <= this.state.fullText.length) {
      this.setShellUpdateTimeout();
    }
  };

  onMenuItemClick = item => {
    const { menu } = this.props;
    const { menuItem } = this.state;

    if (item !== 'back')
      menuItem.push(item);
    else
      menuItem.pop();

    let selected = { ...menu };

    menuItem.forEach(item => selected = selected[item]);

    this.setState({
        menuItem,
        lang: selected.lang,
        url: selected.url,
        fullText: selected.text || 'Select an option below to read more.',
        charCount: 0,
      },
      this.setShellUpdateTimeout());
  };

  componentDidMount() {
    this.charCount = 0;

    this.setState(
      {
        fullText: this.props.greeting
      },
      () => this.setShellUpdateTimeout()
    );
  }

  render() {
    const { menuItem, fullText, charCount, url, lang } = this.state;
    const { menu } = this.props;

    const shownPromptLines = getPromptLines(fullText.slice(0, charCount));
    const allPromptLines = getPromptLines(fullText);

    let meta = [];
    let currentPath = null;

    if (menuItem.length > 0)
      currentPath = (
        <div key={'promptLine-3'}>
          <code style={{color: colors.yellow}}>{menuItem.join(' > ')}</code>
        </div>
      );

    let selected = { ...menu };
    menuItem.forEach(item => selected = selected[item]);

    if (url)
      meta.push(
        <div key={'promptLine-2'}>
          <code style={{color: colors.purple}}>URL: <a href={url}>{url}</a></code>
        </div>
      );

    if (lang)
      meta.push(
        <div key={'promptLine-1'}>
          <code style={{color: colors.green}}>
            Languages: {lang.join(', ')}
          </code>
        </div>
      );

    return (
      <div className='Terminal'>
        <div className="terminalPlaceholder" ref={ref => this.invisibleTerminal = ref}>
          <Segment
            inverted
            raised
            size={isDesktop() ? 'large' : 'small'}>
            {currentPath && <div className="currentPath">{currentPath}</div>}
            {meta.length > 0 && <div className="meta">{meta}</div>}
            {allPromptLines.length > 0 && <div className="content">{allPromptLines}</div>}
            {this.getMenuMaybe(true)}
          </Segment>
        </div>
        <div className="terminalBody" ref={ref => this.terminal = ref}>
          <Segment
            inverted
            raised
            style={{minHeight: this.invisibleTerminal ? this.invisibleTerminal.scrollHeight : 0}}
            size={isDesktop() ? 'large' : 'small'}>
            {currentPath && <div className="currentPath">{currentPath}</div>}
            {meta.length > 0 && <div className="meta">{meta}</div>}
            {shownPromptLines.length > 0 && <div className="content">{shownPromptLines}</div>}
            {this.getMenuMaybe()}
          </Segment>
        </div>
      </div>
    );
  }
}

export default Terminal;
export {
  colors
};
