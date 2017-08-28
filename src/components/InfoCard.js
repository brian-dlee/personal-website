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
          <Divider horizontal>TL;DR</Divider>
          <p>
            I love software development - a field that infuses critical-thinking
            and expression into one. I put everything I have
            into my projects with an obsession for going the extra mile.
            I have significant professional experience
            with large scale apps across the entire
            stack including image and geospatial data processing,
            frontend development, and database and Linux system 
            administration/design.
          </p>
          <p>
            My focus and passion is web development and lately PWA
            development using React. I am looking forward to
            getting more involved cutting-edge web technologies
            such as AI and applications using WebGL.
          </p>
        </Segment>
      </div>
    );
  }
}