import * as React from 'react';

export class SearchHome extends React.Component {

  render() {
    console.log('hello world');
    return (
      <div>
        <div className="search-home-banner">
          <h1>Welcome to Uhome</h1>
          <span className="login">Login</span>
          <span className="signup">Signup</span>

          <span>My bookings</span>
          <span className="telephone">
            <span>Fontawesome</span>
            <span></span>400-991-5791</span>
        </div>

        <div className="breadcrum"></div>

        <div className="search-filter-box"></div>

        <div className="list-content"></div>
      </div>
    );

  }
}
