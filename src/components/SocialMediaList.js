import React from 'react';
import { Icon, List, Popup } from 'semantic-ui-react';

export default class SocialMediaList extends React.Component {
  render() {
    const { items } = this.props;

    return (
      <List className="socialLinks" horizontal size="huge">
        {
          items && Object.keys(items).map(item =>
            <Popup
              key={item}
              position="top center"
              trigger={(
                <List.Item>
                  <a href={items[item].url}>
                    <Icon inverted name={item} />
                  </a>
                </List.Item>
              )}
              content={items[item].popup} />
          )
        }
      </List>
    );
  }
}