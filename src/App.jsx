import React, { Component } from 'react';

import './App.css';
import Inputs from './components/Inputs.jsx';
import BookList from './components/BookList.jsx';
import Dropdown from './components/Dropdown.jsx';
import ExternalBookList from './components/ExternalBookList.jsx'

class App extends Component {
  constructor() {
    super();

    this.state = {
      booksToRead: [],
      booksIveRead: [],
      id1: '',
      id2: '',
      findMoreBooks: [],
    }
    this.updateList1 = this.updateList1.bind(this)
    this.updateList2 = this.updateList2.bind(this)
    this.updateList3 = this.updateList3.bind(this)
    this.bookClick1 = this.bookClick1.bind(this)
    this.bookClick2 = this.bookClick2.bind(this)
  }

  updateList1(Books) {
    this.setState({
      booksToRead: Books,
      id1: '',
    })
  }
  updateList2(Books) {
    this.setState({
      booksIveRead: Books,
      id2: '',
    })
  }
  updateList3(Books) {
    this.setState({
      findMoreBooks: Books,
    })
  }
  bookClick1(bookId) {
    this.setState({
      id1: bookId,
    })
  }
  bookClick2(bookId) {
    this.setState({
      id2: bookId
    })
  }

  render() {
    console.log(this.state.findMoreBooks)
    const url1 = '/api/books/toread'
    const url2 = '/api/books/iveread'
    return (
      <div className="App">
        <div className='BooksToRead'>
          <div className='InputSection'>
            <h1>Books to Read</h1>
            <Inputs url={url1} update={this.updateList1} id={this.state.id1} />
          </div>
          <div className='BookListBox'>
            <BookList click={this.bookClick1} bookList={this.state.booksToRead} selectedId={this.state.id1}/>
          </div>
        </div>
        <div className='BooksIveRead'>
          <div className='InputSection'>
            <h1>Books I've Read</h1>
            <Inputs url={url2} update={this.updateList2} id={this.state.id2} />
          </div>
          <div className='BookListBox'>
            <BookList click={this.bookClick2} bookList={this.state.booksIveRead} selectedId={this.state.id2} />
          </div>
        </div>
        <div className='ExternalApiSection' >
          <div className='InputSection'>
            <h1>Find More Books</h1>
            <Dropdown update={this.updateList3} />
          </div>
          <div className='BookListBox' >
            <ExternalBookList bookList={this.state.findMoreBooks} selectedId={''} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
