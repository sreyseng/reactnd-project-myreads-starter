import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './../BooksAPI';

import BookListItem from './book_list_item';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      results: []
    };
  }

  onInputChange(term) {
    this.setState({ term });
    this.bookSearch(term);
  }

  bookSearch(term) {
    if (term && term.length > 0) {
      BooksAPI.search(term)
        .then((results) => {
          if (results && results.length > 0) {
            this.setState({ results });
          } else {
            this.resetSearchResults();
          }
        })
        .catch((err) => {
          console.log(err);
          this.resetSearchResults();
        });
    } else {
      this.resetSearchResults();
    }
  }

  resetSearchResults() {
    this.setState({ results: [] });
  }

  isSaved(id) {
    const test = this.props.savedBooks.filter((savedBook) => savedBook.id === id);
    return test && test.length > 0 ? test[0].shelf : null;
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.term}
              onChange={(event) => this.onInputChange(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.results.map((book) => (
              <BookListItem
                key={book.id}
                book={book}
                shelfKey={this.isSaved(book.id)}
                onShelfChange={this.props.onShelfChange}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
