import * as React from 'react';

export class ZIndex extends React.Component {
  render() {
    return (
      <div className="zindex-container">
        <div className="a-square"></div>
        <div className="b-square">
          <div className="c-square"></div>
        </div>
        <div className="d-square"></div>
      </div>
    );
  }
}
