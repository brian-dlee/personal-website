import React from 'react';
import { Divider, Icon, Segment, Label } from 'semantic-ui-react';

import './InfoCard.css';

export default class InfoCard extends React.Component {
  render() {
    return (
      <div className="InfoCard">
        <Segment className="content">
          <h3 className="title">Software Engineer</h3>
          <div className="title">
            <Label size="large" className="title">
              <Icon name="star" /> Javascript + React
            </Label>
          </div>
          <Divider horizontal>TLDR;</Divider>
          <p>
            Although, I consider myself a web developer,
            I've had significant professional experience
            with large scale apps across the entire
            stack (image and geospatial data backend processing, 
            frontend development, and database and Linux system 
            administration and design.
          </p>
          <p>
            More recently, my focus and passion has been
            PWA development using React, but I'm looking forward to
            getting more involved cutting-edge web technologies
            like AI and applications using WebGL.
          </p>
        </Segment>
      </div>
    );
  }
}