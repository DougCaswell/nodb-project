import React, { Component } from 'react';
import Button from './Button.jsx'
import axios from 'axios'

export default class Inputs extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
            author: '',
            pages: '',
        }
        this.addBook = this.addBook.bind(this)
        this.updateBook = this.updateBook.bind(this)
        this.deleteBook = this.deleteBook.bind(this)
    }

    updateTitle(value) {
        this.setState({
            title: value
        })
    }
    updateAuthor(value) {
        this.setState({
            author: value
        })
    }
    updatePages(value) {
        this.setState({
            pages: value
        })
    }


    componentDidMount() {
        let promise = axios.get(this.props.url)
        promise.then(res => { this.props.update(res.data) })

    }
    addBook() {
        if (this.state.title === '') { alert("The book needs atleast a title!") }
        else {
            let newBook = {
                title: this.state.title,
                author: this.state.author,
                pages: this.state.pages,
            }
            let promise = axios.post(this.props.url, newBook)
            promise.then(res => {
                this.props.update(res.data)
                this.setState({
                    title: '',
                    author: '',
                    pages: '',
                })

            })
        }
    }

    updateBook() {
        if (this.props.id === '') { alert("You have to select a book first!") }
        else {
            let newBook = {
                title: this.state.title,
                author: this.state.author,
                pages: this.state.pages,
            }
            let promise = axios.put(this.props.url + '/' + this.props.id, newBook)
            promise.then(res => {
                this.props.update(res.data)
                this.setState({
                    title: '',
                    author: '',
                    pages: '',
                })
            })
        }
    }

    deleteBook() {
        if (this.props.id === '') { alert("You have to select a book first!") }
        else {
            let promise = axios.delete(this.props.url + '/' + this.props.id)
            promise.then(res => {
                this.props.update(res.data)
                this.setState({
                    title: '',
                    author: '',
                    pages: '',
                })
            })
        }
    }

    render() {
        return (
            <div>
                <div className='Inputs'>
                    <input type="text" placeholder='Title' onChange={(event) => this.updateTitle(event.target.value)} value={this.state.title} />
                    <input type="text" placeholder='Author(s)' onChange={(event) => this.updateAuthor(event.target.value)} value={this.state.author} />
                    <input type="text" placeholder='Pages' onChange={(event) => this.updatePages(event.target.value)} value={this.state.pages} />
                </div>
                <div className='Buttons'>
                    <Button name='Delete' cb={this.deleteBook} />
                    <Button name='Update' cb={this.updateBook} />
                    <Button name='Add' cb={this.addBook} />
                </div>
            </div>
        )
    }
}