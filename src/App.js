import React from 'react';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Bookshelf from './components/book_shelf';
import Search from './components/search';
import './App.css';

const SHELF_CURRENT = { key: 'currentlyReading', value: 'Currently Reading' };
const SHELF_WANT = { key: 'wantToRead', value: 'Want to Read' };
const SHELF_READ = { key: 'read', value: 'Read' };

class BooksApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { results: [] };
  }

  componentDidMount() {
    this.getShelves();
  }

  getShelves() {
    BooksAPI.getAll()
      .then((results) => {
        this.setState({ results });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  shelfFilter(book, shelf) {
    return book.shelf === shelf;
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <Bookshelf
                  onShelfChange={() => this.getShelves()}
                  shelf={SHELF_CURRENT}
                  books={this.state.results.filter((book) =>
                    this.shelfFilter(book, SHELF_CURRENT.key)
                  )}
                />
                <Bookshelf
                  onShelfChange={() => this.getShelves()}
                  shelf={SHELF_WANT}
                  books={this.state.results.filter((book) =>
                    this.shelfFilter(book, SHELF_WANT.key)
                  )}
                />
                <Bookshelf
                  onShelfChange={() => this.getShelves()}
                  shelf={SHELF_READ}
                  books={this.state.results.filter((book) =>
                    this.shelfFilter(book, SHELF_READ.key)
                  )}
                />
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />

        <Route
          path="/search"
          render={() => (
            <Search onShelfChange={() => this.getShelves()} savedBooks={this.state.results} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
