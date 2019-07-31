import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageURL, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageURL})`
      }}
    />
    <div className="content">
      <h2 className="title">{title.toUpperCase()}</h2>
      <span className="subtitle">Buy Now</span>
    </div>
  </div>
);

export default MenuItem;
