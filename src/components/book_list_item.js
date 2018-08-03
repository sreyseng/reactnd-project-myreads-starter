import React from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './../BooksAPI';

const propTypes = {
  book: PropTypes.object.isRequired,
  shelfKey: PropTypes.string,
  onShelfChange: PropTypes.func
};

const BookListItem = ({ book, shelfKey, onShelfChange }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={styleBookCover(book.imageLinks.thumbnail)} />
          <div className="book-shelf-changer">
            <select
              onChange={(event) => onShelfSelect(book, event.target.value, onShelfChange)}
              defaultValue={shelfKey ? shelfKey : 'none'}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
      </div>
    </li>
  );
};

function onShelfSelect(book, shelf, onShelfChange) {
  BooksAPI.update(book, shelf)
    .then((data) => {
      onShelfChange();
    })
    .catch((error) => {
      console.log(error);
    });
}

function styleBookCover(url) {
  return url
    ? { width: 128, height: 193, backgroundImage: `url(${url})` }
    : { width: 128, height: 193, backgroundColor: 'gray' };
}

BookListItem.propTypes = propTypes;

export default BookListItem;
