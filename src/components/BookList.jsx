import React, {Component} from 'react';
import BookItem from './BookItem.jsx'

export default class BookList extends Component {
    render() {
        var list = this.props.bookList
        return (
            <div className='BookList'>
                {list.map(book => {
                    return (
                        <BookItem 
                        title={book.title} 
                        author={book.author} 
                        pages={book.pages} 
                        id={book.id}
                        click={this.props.click}
                        selectedId={this.props.selectedId}
                        />
                    )
                })}
            </div>
        )
    }
}