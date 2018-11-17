import React, {Component} from 'react';


export default class Button extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <button onClick={() => this.props.cb()}>{this.props.name}</button>
            </div>
        )
    }
}