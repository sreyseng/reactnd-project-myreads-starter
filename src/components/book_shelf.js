import React, { Component } from 'react';
import BookListItem from './book_list_item';

class Bookshelf extends Component {
  render() {

    const { title, books } = this.props;

    return (
      <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => <BookListItem key={book.id} book={book} />)}
        </ol>
      </div>
    </div>
    );
  }
}

export default Bookshelf;
