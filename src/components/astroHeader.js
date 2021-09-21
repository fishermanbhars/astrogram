import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <h1 className="header">Astrogram </h1>
        <h4 className="subheader">Brought to you by NASA's Astronomy Photo of the Day (APOD) API </h4>
      </div>
    )
  }
}

export default Header;
