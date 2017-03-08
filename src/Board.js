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
			second: 0,
			score: 0

		}

	 
		this.start = this.start.bind(this);
		this.onKeyDown = this.onKeyDown.bind(this);

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

	onKeyDown(event)  {
        console.log('in event')
    	if(event.which === 65 && this.songArr[this.state.second].red){
            this.setState({
            	score: this.state.score+1
            	});     
        } else if(event.which === 83 && this.songArr[this.state.second].red){
                this.setState({
            		score: this.state.score+1
            	}); 
        } else if(event.which === 68 && this.songArr[this.state.second].red){
               this.setState({
            		score: this.state.score+1
            	}); 
        }else if(event.which === 70 && this.songArr[this.state.second].red){
               this.setState({
            		score: this.state.score+1
            	}); 
        }
    } 

	render() {
		return(
		<div>
			<button onClick={this.start}>Start</button>
			<div tabIndex="1" onKeyDown={this.onKeyDown} className="game">
				<KeySet note={this.songArr[this.state.second+3]} />
				<KeySet note={this.songArr[this.state.second+2]} />
				<KeySet note={this.songArr[this.state.second+1]} />
				<KeySet isPlayer={true}  note={this.songArr[this.state.second]} /> 
			</div>
			<div>
				<h3>{this.state.score}</h3>
			</div>
		</div>
			);
	}
}