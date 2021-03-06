import React from 'react';
import BookListItem from './book_list_item';

const Bookshelf = ({ shelf, books, onShelfChange }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.value}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <BookListItem
              key={book.id}
              book={book}
              shelfKey={shelf.key}
              onShelfChange={onShelfChange}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
