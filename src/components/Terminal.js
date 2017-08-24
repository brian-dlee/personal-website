import React, { Component } from 'react';
import { Icon, List, Segment } from 'semantic-ui-react';
import Cursor from './Cursor';
import Prompt from './Prompt';

import './Terminal.css';

const colors = {
  grey: '#818181',
  green: '#5d9165',
  yellow: '#bbba30',
  purple: '#a36aca',
  blue: '#4384ec'
};

const getRandomTime = () => Math.random() * 50;

class Terminal extends Component {
  constructor() {
    super();

    this.state = {
      fullText: '',
      displayedText: '',
      menuItem: []
    };
  }

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
      displayedText: ''
    },
    this.setShellUpdateTimeout());
  };

  displayMenu() {
    const { fullText, displayedText, menuItem } = this.state;

    if (fullText.length !== displayedText.length)
      return;

    let selected = { ...this.props.menu };
    const items = [];

    menuItem.forEach(item => selected = selected[item]);

    if (menuItem.length > 0)
      items.push(
        <List.Item className="navItem" key="back" onClick={() => this.onMenuItemClick('back')}>
          <a>..</a>
        </List.Item>
      );

    if (!selected.text)
      Object.keys(selected).forEach(item =>
        items.push(
          <List.Item className="navItem" key={item} onClick={() => this.onMenuItemClick(item)}>
            <a>
              {selected[item].starred && <Icon name="star" />}
              {item}
              <i style={{color: colors.green}}>
                {selected[item].lang && `[${selected[item].lang.join(', ')}]`}
              </i>
            </a>
          </List.Item>
        )
      );

    if (items.length > 0)
      items.unshift(
        <List.Item style={{color: colors.grey}} key="navigation">
          {'<Navigation>'}
        </List.Item>
      );

    return <List>{items}</List>;
  }

  setShellUpdateTimeout() {
    // This is my way of making it look lifelike!
    setTimeout(this.writeNextCharacter.bind(this), getRandomTime());
  }

  writeNextCharacter() {
    this.setState({
      displayedText: this.state.fullText.slice(0, this.charCount)
    });

    this.charCount++;

    if (this.charCount <= this.state.fullText.length) {
      this.setShellUpdateTimeout();
    }
  }

  componentDidMount() {
    this.charCount = 0;

    this.setState({
      fullText: this.props.greeting
    }, () => this.setShellUpdateTimeout()
    );
  }

  render() {
    const { menuItem, displayedText, url, lang } = this.state;
    const { menu } = this.props;

    const promptLines = displayedText.split(/\n/);
    let content = [];
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

    for (let i = 0; i < promptLines.length; i++) {
      const line = promptLines[i];

      if (line.trim().length === 0)
        continue;

      content.push(
        <div key={'promptLine' + i}>
          <code><Prompt />{line}{promptLines.length - 1 === i ? <Cursor /> : ''}</code>
        </div>
      );
    }

    return (
      <div className="Terminal">
        <Segment inverted raised>
          {currentPath && <div className="currentPath">{currentPath}</div>}
          {meta.length > 0 && <div className="meta">{meta}</div>}
          {content.length > 0 && <div className="content">{content}</div>}
          {this.displayMenu()}
        </Segment>
      </div>
    );
  }
}

export default Terminal;
export {
  colors
};
