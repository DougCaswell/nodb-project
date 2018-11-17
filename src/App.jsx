import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Inputs from './components/Inputs.jsx';
import BookList from './components/BookList.jsx';
import Button from './components/Button.jsx';
import Dropdown from './components/Dropdown.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      booksToRead: [],
      booksIveRead: [],
      id1: '',
      id2: '',
    }
    this.updateList1 = this.updateList1.bind(this)
    this.updateList2 = this.updateList2.bind(this)
  }

  updateList1(Books) {
    this.setState({
      booksToRead: Books,
      id1: '',
    })
  }
  updatelist2(Books) {
    this.setState({
      booksIveRead: Books,
      id2: '',
    })
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
          <div className='BookListBox1'>
            <BookList />
          </div>
        </div>
        <div className='BooksIveRead'>
          <div className='InputSection'>
            <h1>Books I've Read</h1>
            <Inputs url={url2} update={this.updatelist2} id={this.state.id2} />
          </div>
          <div className='BookListBox2'>
            <BookList />
          </div>
        </div>
        <div className='ExternalApiSection' >
          <div className='Selection'>
            <h1>Find More Books</h1>
            <Dropdown />
            <Button className='SupriseMe' />
          </div>
          <div className='BookListBox3' >
            <BookList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
