import React, { Component } from 'react';
import Key from './Key';
import './KeySet.css';

export default class KeySet extends Component {
	

	render() {

        const isRed = this.props.note && this.props.note.red;
        const isBlue = this.props.note && this.props.note.blue;
        const isGreen = this.props.note && this.props.note.green;
        const isYellow = this.props.note && this.props.note.yellow;

        const successR = isRed && this.props.isPLayer;
        const successB = isBlue && this.props.isPLayer;
        const successG = isGreen && this.props.isPLayer;
        const successY = isYellow && this.props.isPLayer;

		
        return (
			<div className="KeySet">           
                <Key color="red" active={isRed} />
                <Key color="blue" active={isBlue} />
                <Key color="green" active={isGreen} />
                <Key color="yellow" active={isYellow} />
    		</div>
		);
	}
}