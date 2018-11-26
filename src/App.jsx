import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Inputs from './components/Inputs.jsx';
import BookList from './components/BookList.jsx';
import Dropdown from './components/Dropdown.jsx';
import ExternalBookList from './components/ExternalBookList.jsx'
import Button from './components/Button.jsx'

class App extends Component {
  constructor() {
    super();

    this.state = {
      booksToRead: [],
      booksIveRead: [],
      findMoreBooks: [],
      id1: '',
      id2: '',
      id3: '',
    }
    this.updateList1 = this.updateList1.bind(this)
    this.updateList2 = this.updateList2.bind(this)
    this.updateList3 = this.updateList3.bind(this)
    this.bookClick1 = this.bookClick1.bind(this)
    this.bookClick2 = this.bookClick2.bind(this)
    this.bookClick3 = this.bookClick3.bind(this)
    this.specialAdd1 = this.specialAdd1.bind(this)
    this.specialAdd2 = this.specialAdd2.bind(this)
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
      id3: '',
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
  bookClick3(bookId) {
    this.setState({
      id3: bookId
    })
  }
  specialAdd1() {
    if (this.state.id3 === '') {
      alert("You have to select a book first!")
    }
    else {
      let index = this.state.findMoreBooks.findIndex(book => this.state.id3 === book.id);
      let newBook = {
        title: this.state.findMoreBooks[index].volumeInfo.title,
        author: this.state.findMoreBooks[index].volumeInfo.authors,
        pages: this.state.findMoreBooks[index].volumeInfo.pageCount,
      };
      let promise = axios.post('/api/books/toread', newBook);
      promise.then(res => {
        this.updateList1(res.data)
      });
      this.setState({
        id3: ''
      });
    }
  }
  specialAdd2() {
    if (this.state.id3 === '') {
      alert("You have to select a book first!")
    }
    else {
      let index = this.state.findMoreBooks.findIndex(book => this.state.id3 === book.id);
      let newBook = {
        title: this.state.findMoreBooks[index].volumeInfo.title,
        author: this.state.findMoreBooks[index].volumeInfo.authors,
        pages: this.state.findMoreBooks[index].volumeInfo.pageCount,
      };
      let promise = axios.post('/api/books/iveread', newBook)
      promise.then(res => {
        this.updateList2(res.data)
      })
      this.setState({
        id3: ''
      })
    }
  }

  render() {
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
            <BookList click={this.bookClick1} bookList={this.state.booksToRead} selectedId={this.state.id1} />
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
            <div className='SpecialAdd'>
              <div className='Labels'>
                <h1 className='Label' >Books to Read</h1>
                <h1 className='Label' >Books I've Read</h1>
              </div>
              <div className='SpecialAddButtons'>
                <Button cb={this.specialAdd1} name='Add' />
                <Button cb={this.specialAdd2} name='Add' />
              </div>
            </div>
          </div>
          <div className='BookListBox' >
            <ExternalBookList click={this.bookClick3} bookList={this.state.findMoreBooks} selectedId={this.state.id3} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
