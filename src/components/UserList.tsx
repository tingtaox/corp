import * as React from 'react';
import * as _ from 'lodash';

import * as UserCard from './UserCard';
import User from './UserCard';

export class UserInfo extends React.Component {

  render() {
    let users: UserCard.User[] = [
      {
        photoUrl: 'https:www.google.com',
        authorName: 'google smith',
        description: 'First google book',
        publishDate: 1111111
      },
      {
        photoUrl: 'https:www.facebokk.com',
        authorName: 'Facebook Smith',
        description: 'First Facebook book',
        publishDate: 2222222
      },
      {
        photoUrl: 'https:www.amazon.com',
        authorName: 'Amazon Smith',
        description: 'First Amazon book',
        publishDate: 3333333
      },
    ];

    let element = undefined;

    _.forEach(users, user => {
      element += "<User user={user} />;
    });

    let element = _.map(users, user => {
      return <User user={user} />;
    });

    return element;
  }

}