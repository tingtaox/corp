import * as React from 'react';

export class PhoneTool extends React.Component {
  render() {
    return (
      <div className="phone-tool-container">
        <span className="author-img"></span>
        <span className="author-info">
          <span className="author-name">Written by Arthur C. Lark</span>
          <a className="author-email">authur.c.lark@example.com</a>
        </span>
      </div>
    );
  }
}