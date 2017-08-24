import React from 'react';
import { Divider, Icon, Image, Segment, Label } from 'semantic-ui-react';

import SocialMediaList from './SocialMediaList';

import './ContactCard.css';

const gravatarSrc = 'https://www.gravatar.com/avatar/83b4095979413f8886a5197b8b692bdf?s=400&r=pg';

export default class ContactCard extends React.Component {
  render() {
    return (
      <div className="ContactCard">
        <h2>Brian Lee</h2>
        <Image
          shape="circular"
          centered
          src={gravatarSrc}
          className="profileImage"
          alt="Headshot" />
        <SocialMediaList
          items={{
            twitter: {
              url: "https://twitter.com/brian_dlee",
              popup: "@brian_dlee"
            },
            github: {
              url: "https://github.com/brian-dlee",
              popup: "@brian-dlee"
            },
            gitlab: {
              url: "https://gitlab.com/briandlee",
              popup: "@briandlee"
            },
            'mail outline': {
              url: "mailto:briandl92391@gmail.com",
              popup: "briandl92391@gmail.com"
            },
          }} />
        <Segment className="content">
          <h3 className="title">Software Engineer</h3>
          <div className="title">
            <Label size="large" className="title">
              <Icon name="star" /> Javascript + React
            </Label>
          </div>
          <Divider horizontal>TLDR;</Divider>
          <p>
            <small>
              Lately, my focus has been
              PWA development using React, but I'm looking forward to
              getting more involved cutting-edge web technologies
              like AI and applications using WebGL.
            </small>
          </p>
        </Segment>
      </div>
    );
  }
}