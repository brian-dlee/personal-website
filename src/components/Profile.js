import React from 'react';
import { Image } from 'semantic-ui-react';

import { isDesktop } from '../utilities/device-detection';
import SocialMediaList from './SocialMediaList';

import './Profile.css';

const gravatarSrc = 'https://www.gravatar.com/avatar/83b4095979413f8886a5197b8b692bdf?s=400&r=pg';

export default class Profile extends React.Component {
  render() {
    return (
      <span className="Profile">
        <h2>Brian Lee</h2>
        <Image
          size={isDesktop() ? 'medium' : 'small'}
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
      </span>
    );
  }
}