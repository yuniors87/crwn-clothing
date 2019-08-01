import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ key, title, imageUrl, size, history, linkUrl, match }) => (
  <div
    key={key}
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h2 className="title">{title.toUpperCase()}</h2>
      <span className="subtitle">Buy Now</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
