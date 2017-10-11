import React, { Component } from 'react';

import BookList from '../containers/book_list';
import ActiveBook from '../containers/active_book';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <ActiveBook />
      </div>
    );
  }
}
