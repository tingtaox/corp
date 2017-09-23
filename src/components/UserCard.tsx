import * as React from 'react';

export interface User {
  photoUrl: string;
  authorName: string;
  description: string;
  publishDate: number;
}

export interface UserProps {
  user: User;
}

export default class UserCard extends React.Component<UserProps, undefined> {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <img src={this.props.user.photoUrl}></img>
        <p>{this.props.user.authorName}</p>
        <p>{this.props.user.description}</p>
        <p>{this.props.user.publishDate}</p>
      </div>
    );
  }

}