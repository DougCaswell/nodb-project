import React, {Component} from 'react';


export default class BookItem extends Component {
    render() {
        return (
            <div className='Book' onClick={() => this.props.click(this.props.id)} >
                <img className='BookIcon' 
                src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/book-512.png" 
                alt="Book Icon"/>
                <h4>{this.props.title}</h4>
                <h4>{this.props.author}</h4>
                <h4>{this.props.pages}</h4>
            </div>
        )
    }
}