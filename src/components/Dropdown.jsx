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
                title: 'Science Fiction',
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
            <div className="DropDownMenu">
                <div className="DropDownHeader" onClick={() => this.toggleList()}>
                    <div className="DropDownTitle">Genre</div>
                    {this.state.listOpen
                        ? <FontAwesome name="Angle-up" size="2x" />
                        : <FontAwesome name="Angle-down" size="2x" />
                    }
                </div>
                {this.state.listOpen && <ul className="DropDownList">
                    {this.state.dropDownArray.map((genre) => (
                        <li 
                        className="DropDownItem" 
                        id={genre.id} 
                        key={genre.id}
                        onClick={() => {
                            this.onSelect(genre)
                            this.toggleList()
                        }}
                         >{genre.title}</li>
                    ))}
                </ul>}
            </div>
        )
    }
}

export default onClickOutside(Dropdown)