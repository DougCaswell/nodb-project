import React, { Component } from 'react';


export default class BookItem extends Component {
    render() {
        return (
            <div className={this.props.id === this.props.selectedId ? 'selected': 'Book'} onClick={() => this.props.click(this.props.id)} >
                <img className='BookIcon'
                    src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/book-512.png"
                    alt="Book Icon" />
                <div className='BookDetails'>
                    <h4>Title: {this.props.title}</h4>
                    <h4>Author: {this.props.author}</h4>
                    <h4>Pages: {this.props.pages}</h4>
                </div>
            </div>
        )
    }
}