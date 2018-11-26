import React, { Component } from 'react';
import axios from 'axios';
import onClickOutside from "react-onclickoutside";
import { ReactComponent as UpArrow } from './../SVGs/baseline-keyboard_arrow_up-24px.svg'
import { ReactComponent as DownArrow } from './../SVGs/baseline-keyboard_arrow_down-24px.svg'


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
                    <div className="DropDownTitle">Genre
                        <div className="Arrow">
                            {this.state.listOpen
                                ? <UpArrow />
                                : <DownArrow />
                            }
                        </div>
                    </div>
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