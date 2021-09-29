import React from "react";
import PropTypes from "prop-types";
import { Icon, List, Popup } from "semantic-ui-react";

import "./SocialMediaList.css";

const SocialMediaList = ({ items }) => (
  <List className="SocialMediaList" horizontal size="huge">
    {items &&
      Object.keys(items).map(item => (
        <Popup
          key={item}
          position="top center"
          trigger={
            <List.Item>
              <a target="_blank" rel="noreferrer" href={items[item].url}>
                <Icon fitted inverted name={item} />
              </a>
            </List.Item>
          }
          content={items[item].popup}
        />
      ))}
  </List>
);

SocialMediaList.propTypes = {
  items: PropTypes.objectOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      popup: PropTypes.string.isRequired
    })
  ).isRequired
};

export default SocialMediaList;
