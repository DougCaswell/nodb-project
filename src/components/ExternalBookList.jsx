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
                        title={book.volumeInfo.title} 
                        author={book.volumeInfo.authors} 
                        pages={book.volumeInfo.pageCount} 
                        id={book.id}
                        click={() => console.log('Click')}
                        />
                    )
                })}
            </div>
        )
    }
}