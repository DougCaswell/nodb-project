import React, {Component} from 'react';
import BookItem from './BookItem.jsx';
import intersperse from 'intersperse';

export default class BookList extends Component {
    render() {
        var list = this.props.bookList
        return (
            <div className='BookList'>
                {list.map(book => {
                    return (
                        <BookItem 
                        title={book.volumeInfo.title} 
                        author={intersperse(book.volumeInfo.authors, ', ')} 
                        pages={book.volumeInfo.pageCount} 
                        id={book.id}
                        key={book.id}
                        click={() => console.log('Click')}
                        selectedId={this.props.selectedId}
                        />
                    )
                })}
            </div>
        )
    }
}