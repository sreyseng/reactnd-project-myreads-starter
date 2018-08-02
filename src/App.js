import React from 'react'
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Bookshelf from './components/book_shelf';
import Search from './components/search';
import './App.css'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { results: [] };
  }

  componentDidMount() {
    BooksAPI.search('Virtual Reality').then((results) => {
      this.setState({results})
    }).catch(err => {
      console.log(err)
    })
  }

  testFilter(book, rangeMin, rangeMax) {
    return (book.pageCount >= rangeMin && book.pageCount <= rangeMax);
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
                <Bookshelf title ='Currently Reading' books={this.state.results.filter((book) => this.testFilter(book, 0, 150))}/>
                <Bookshelf title ='Want to Read' books={this.state.results.filter((book) => this.testFilter(book, 151, 400))}/>
                <Bookshelf title ='Read' books={this.state.results.filter((book) => this.testFilter(book, 401, 10000))}/>
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
