import React, { Component } from 'react';
import KeySet from "./KeySet.js";
import './Board.css';


export default class Board extends Component {
	constructor(props){
		super(props);

		this.songArr = [
			{red:false, blue:false, green:false, yellow:true},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:true, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:false, blue:true, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:true},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:true, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:false, blue:true, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:false, blue:true, green:false, yellow:false},
			{red:false, blue:false, green:true, yellow:false},
			{red:false, blue:false, green:true, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:false, blue:true, green:false, yellow:false},
			{red:false, blue:false, green:true, yellow:false},
			{red:false, blue:false, green:true, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:false, blue:true, green:false, yellow:false},
			{red:false, blue:false, green:true, yellow:false},
			{red:false, blue:false, green:true, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:false, blue:true, green:false, yellow:false},
			{red:false, blue:false, green:true, yellow:false},
			{red:false, blue:false, green:true, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:false, blue:true, green:false, yellow:false},
			{red:false, blue:false, green:true, yellow:false},
			{red:false, blue:false, green:true, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},							
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:false, blue:true, green:false, yellow:false},
			{red:false, blue:false, green:true, yellow:false},
			{red:false, blue:false, green:true, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:true, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:true, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:true, green:false, yellow:false},
			{red:false, blue:true, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:true, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:true, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:true, green:false, yellow:false},
			{red:false, blue:true, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:true, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:true, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:true, green:false, yellow:false},
			{red:false, blue:true, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:true, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:true, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:true, green:false, yellow:false},
			{red:false, blue:true, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false},
			{red:true, blue:false, green:false, yellow:false},
			{red:false, blue:false, green:false, yellow:false}
		];

		this.state = {
			second: 0
		}

	 
		this.start = this.start.bind(this);
	
	}

	start() {
	
		
		let intervalId = setInterval(function(){
			this.setState({
				second: this.state.second+1
			});
		}.bind(this), 192)

		console.log(intervalId)

		console.log("Eric")
	}

	render() {
		return(
		<div>
			<button onClick={this.start}>Start</button>
			<div className="game">
				<KeySet note={this.songArr[this.state.second+3]} />
				<KeySet note={this.songArr[this.state.second+2]} />
				<KeySet note={this.songArr[this.state.second+1]} />
				<KeySet isPlayer={true} note={this.songArr[this.state.second]} /> 
			</div>
		</div>
			);
	}
}