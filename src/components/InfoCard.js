import React from "react";
import { Divider, Icon, Segment, Label } from "semantic-ui-react";

import "./InfoCard.css";

const InfoCard = () => (
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
        I love software development - a field that fuses critical-thinking and
        expression into one. I put everything I have into my projects with an
        obsession for going the extra mile. I have significant professional
        experience with large scale apps across the entire stack including
        complex data processing, frontend development, and database and Linux
        system administration/design.
      </p>
      <p>
        My focus and passion is web development. Recently, I have been intrigued
        by PWA development using React and the different unique ways of
        implementating an application backend like serverless cloud
        implementations and headless CMSs. I am looking forward to getting more
        involved cutting-edge web technologies in realms like AI and intensive
        graphic processing using WebGL.
      </p>
    </Segment>
  </div>
);

export default InfoCard;
