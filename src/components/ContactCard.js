import React from 'react';
import { Card, Icon, Image, List } from 'semantic-ui-react';

const gravatarSrc = 'https://www.gravatar.com/avatar/83b4095979413f8886a5197b8b692bdf?s=400&r=pg'

export default class ContactCard extends React.Component {
  render() {
    return (
      <Card centered raised>
      <Image 
        centered
        src={gravatarSrc} 
        className="profileImage" 
        alt="Headshot" />
      <Card.Content>
        <Card.Header>
          Brian Lee
        </Card.Header>
        <Card.Description>
          <p>
            <Icon name="star" /> Javascript + React
          </p>
          <p><strong>Areas I'd love to explore further</strong></p>
          <p>
            AI and Game Development
          </p>

        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <List>
          <List.Item>
            <a href="https://twitter.com/brian_dlee">
              <Icon name="twitter" /> brian_dlee
            </a>
          </List.Item>
          <List.Item>
            <a href="https://github.com/brian-dlee">
              <Icon name="github" /> brian-dlee
            </a>
          </List.Item>
          <List.Item>
            <a href="https://gitlab.com/briandlee">
              <Icon name="gitlab" /> briandlee
            </a>
          </List.Item>
          <List.Item>
            <a href="mailto:briandl92391@gmail.com">
              <Icon name="mail outline" /> briandl92391@gmail.com
            </a>
          </List.Item>
          <List.Item>
            <a href="tel:7757647149">
              <Icon name="phone" /> (775) 764-7149
            </a>
          </List.Item>
        </List>
      </Card.Content>
    </Card>
    );
  }
}