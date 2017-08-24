import React from 'react';
import { Icon, List, Popup } from 'semantic-ui-react';

export default class SocialMediaList extends React.Component {
  render() {
    const { items } = this.props;

    return (
      <List className="socialLinks" horizontal>
        {
          items && Object.keys(items).map(item =>
            <Popup
              key={item}
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