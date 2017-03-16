import React, { Component } from 'react';
import Key from './Key';
import './KeySet.css';

export default class KeySet extends Component {
	

	render() {

        const isRed = this.props.note && this.props.note.red;
        const isBlue = this.props.note && this.props.note.blue;
        const isGreen = this.props.note && this.props.note.green;
        const isYellow = this.props.note && this.props.note.yellow;

        return (
			<div className="KeySet">           
                <Key color="red" flash={this.props.note.flash} active={isRed} />
                <Key color="blue" flash={this.props.note.flash} active={isBlue} />
                <Key color="green" flash={this.props.note.flash} active={isGreen} />
                <Key color="yellow" flash={this.props.note.flash} active={isYellow} />
    		</div>
		);
	}
}