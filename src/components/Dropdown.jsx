import React, { Component } from 'react';
import axios from 'axios';
import FontAwesome from "react-fontawesome";
import onClickOutside from "react-onclickoutside";


class Dropdown extends Component {
    constructor() {
        super();

        this.state = {
            dropDownArray: [{
                id: 0,
                title: 'Fantasy',
            }, {
                id: 1,
                title: 'Sci-fi',
            }, {
                id: 2,
                title: 'Mystery',
            }, {
                id: 3,
                title: 'Romance',
            }],
            listOpen: false,
            url: '/api/findBooks',
        }
    }

    handleClickOutside(event) {
        this.setState({
            listOpen: false,
        })
    }

    toggleList() {
        this.setState(oldState => ({
            listOpen: !oldState.listOpen,
        }))
    }

    onSelect(genre) {
        let promise = axios.post(this.state.url, genre)
        promise.then(res => {
            this.props.update(res.data.items)
        })
        
    }

    render() {
        return (
            <div className="dropDownMenu">
                <div className="dropDownHeader" onClick={() => this.toggleList()}>
                    <div className="dropDownTitle">Genre</div>
                    {this.state.listOpen
                        ? <FontAwesome name="angle-up" size="2x" />
                        : <FontAwesome name="angle-down" size="2x" />
                    }
                </div>
                {this.state.listOpen && <ul className="dropDownList">
                    {this.state.dropDownArray.map((genre) => (
                        <li 
                        className="dropDownItem" 
                        id={genre.id} 
                        key={genre.id}
                        onClick={() => {
                            this.onSelect(genre)
                        }}
                         >{genre.title}</li>
                    ))}
                </ul>}
            </div>
        )
    }
}

export default onClickOutside(Dropdown)