import React, { Component } from 'react';

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

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={ this.styleBookCover() }></div>
            <div className="book-shelf-changer">
              <select>
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