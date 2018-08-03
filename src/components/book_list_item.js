import React, { Component } from 'react';
import * as BooksAPI from './../BooksAPI'

class BookListItem extends Component {
  constructor(props) {
    super(props);

    this.state = { book: props.book};
  }

  styleBookCover() {
    return this.state.book.imageLinks ?
      { width: 128, height: 193, backgroundImage: `url(${this.state.book.imageLinks.thumbnail})` }:
      { width: 128, height: 193, backgroundColor: 'gray' }
  }

  onShelfSelect(shelf) {
    BooksAPI.update(this.state.book, shelf)
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={ this.styleBookCover() }></div>
            <div className="book-shelf-changer">
              <select onChange={(event) => this.onShelfSelect(event.target.value)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.state.book.title}</div>
          <div className="book-authors">{this.state.book.authors && this.state.book.authors.join(', ')}</div>
        </div>
      </li>
    );
  }
}

export default BookListItem;
