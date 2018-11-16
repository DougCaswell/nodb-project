import React, { Component } from 'react';
import './App.css';
import Inputs from './components/Inputs.jsx';
import BookList from './components/BookList.jsx';
import Button from './components/Button.jsx';
import Dropdown from './components/Dropdown.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='BooksToRead'>
          <div className='InputSection'>
            <Inputs />
            <Button className='Delete1' />
            <Button className='Update1' />
            <Button className='Add1' />
          </div>
          <div className='BookListBox1'>
            <h1>Books to Read</h1>
            <BookList />
          </div>
        </div>
        <div className='BooksIveRead'>
          <div className='InputSection'>
            <Inputs />
            <Button className='Delete2' />
            <Button className='Update2' />
            <Button className='Add2' />
          </div>
          <div className='BookListBox2'>
            <h1>Books I've Read</h1>
            <BookList />
          </div>
        </div>
        <div className='ExternalApiSection' >
          <div className='Selection'>
            <Dropdown />
            <Button className='SupriseMe' />
          </div>
          <div className='BookListBox3' >
            <h1>Find More Books</h1>
            <BookList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
