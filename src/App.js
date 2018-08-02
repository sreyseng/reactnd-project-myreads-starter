import React from 'react'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './components/book_shelf';
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
              <a onClick={() => console.log('open search')}>Add a book</a>
            </div>
          </div>
      </div>
    )
  }
}

export default BooksApp
