import React from 'react'
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Bookshelf from './components/book_shelf';
import Search from './components/search';
import './App.css'

const SHELF_CURRENT = 'currentlyReading';
const SHELF_WANT = 'wantToRead';
const SHELF_READ = 'read';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { results: [] };
  }

  componentDidMount() {
    this.getShelves();
  }

  getShelves() {
    BooksAPI.getAll().then((results) => {
      console.log(results);
      this.setState({results})
    }).catch(err => {
      console.log(err)
    })
  }

  shelfFilter(book, shelf) {
    return book.shelf === shelf;
  }

  render() {
    return (
      <div className="app">

        <Route exact path='/' render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <Bookshelf title ='Currently Reading' books={this.state.results.filter((book) => this.shelfFilter(book, SHELF_CURRENT))}/>
                <Bookshelf title ='Want to Read' books={this.state.results.filter((book) => this.shelfFilter(book, SHELF_WANT))}/>
                <Bookshelf title ='Read' books={this.state.results.filter((book) => this.shelfFilter(book, SHELF_READ))}/>
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
          </div>
        )} />

        <Route path='/search' render={() => (
          <Search />
        )} />

      </div>
    )
  }
}

export default BooksApp
