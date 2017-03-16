import React, { Component } from 'react';
import KeySet from "./KeySet.js";
import Outline from "./Outline.js";
import './Board.css';
const songArr = require("./SongArr.json");
import Start from "../public/img/start.png";
import Instructions from "../public/img/instructions.png";
import Game from "../public/img/game.png";
import Fire from "../public/audio/fire3.mp3";


export default class Board extends Component {
	constructor(props){
		super(props);

		

		this.state = {
			second: 0,
			score: 0,
			gameScreen: 'start',
			songArr: songArr
		}

	 
		this.start = this.start.bind(this);
		this.onKeyDown = this.onKeyDown.bind(this);
		this.instruction = this.instruction.bind(this);
	}

	instruction() {
		this.setState({
			gameScreen: 'instructions'
		})
	}

	start() {
		const beat = () => {
			console.log("fuck " + this.state.second);
			console.log("you " + this.state.songArr.length);
			

			if (this.state.second >= this.state.songArr.length - 4) {
			    if (this.state.score > 45){
		    		this.setState({
		    			gameScreen: 'winner'	
		    		});
		    		clearInterval(this.gameInterval);
		    	} else {
		    		this.setState({
		    			gameScreen: 'loser'
		    		});
		    		clearInterval(this.gameInterval);
		    	}

			}
			this.setState({
				second: this.state.second+1
			});

		}

		this.gameInterval = setInterval(beat, 192);

		this.setState({
			gameScreen: 'game'
		})
		
 	}

	onKeyDown(event)  {
        console.log(this.state.success);
    	if(event.which === 65 && this.state.songArr[this.state.second].red){
            this.state.songArr[this.state.second].flash = 'success'
            this.setState({
            	score: this.state.score+1
            	});

        } else if(event.which === 83 && this.state.songArr[this.state.second].blue){
                this.state.songArr[this.state.second].flash = 'success'
                this.setState({
            		score: this.state.score+1
            	}); 
        } else if(event.which === 68 && this.state.songArr[this.state.second].green){
               	this.state.songArr[this.state.second].flash = 'success'
               	this.setState({
            		score: this.state.score+1
            	}); 
        }else if(event.which === 70 && this.state.songArr[this.state.second].yellow){
               	this.state.songArr[this.state.second].flash = 'success'
               	this.setState({
            		score: this.state.score+1
            	}); 
        }
    }
    

	render() {
		switch(this.state.gameScreen){
			case 'start':
				return (
					<div className="game start">
						<div className="startImg">
							<img alt="Jammin with Jimi Start Screen"src={Start} />
						</div>
						<div className="start">
							<h1>Jammin with Jimi</h1>
							<button id="button" onClick={this.instruction}>Start</button>
						</div>
					</div>
					);
				break;
			case 'instructions':
				return (
					<div className="game">
						<div className="instImg">
							<img alt="Jammin with Jimi Instructions" src={Instructions} />
							<div className="instButton">
								<button id="button" onClick={this.start}>Play</button>
							</div>
						</div>

							<div className="num1" >
								<p>Hey I heard about you</p>
							</div>
							<div className="num2">
								<p>You’re that new guitar player <br/>
								&nbsp;&nbsp;&nbsp;&nbsp;everyone’s talking about</p>
							</div>
							<div className="num3" >
								<p>Lets see if you can play <br/>
								&emsp;one of my tunes</p>
							</div>
							<div className="num4">
								<p>First, I{"'"}ll show you <br/>
								&emsp;how to play</p>
							</div>
							<div className="num5">
								<p>Each key on the keyboard <br/>
									represents a different color</p>
							</div>
							<div className="num6">
								<p>A = red&nbsp;&nbsp;&nbsp;&nbsp;S = blue <br/>
								    D = green&nbsp;&nbsp;&nbsp;&nbsp;F = yellow</p>
							</div>
							<div className="num7">
								<p>Press the correct key once <br/>
								the colored box falls into its <br/>
								&nbsp;&nbsp;&nbsp;&nbsp;matching outline</p>
							</div>
							<div className="num8">
								<p>Each correct note increases <br/>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;your score</p>
							</div>
							<div className="num9">
								<p>Click on my picture to activate <br/>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								&nbsp;&nbsp;&nbsp;&nbsp;the keyboard</p>
							</div>
							<div className="num10">
								<p>Press Play to begin</p>
							</div>
					</div>
					);
				break;
			case 'game':
				return(
				<div>		
					<div tabIndex="1" onKeyDown={this.onKeyDown} className="game">							
						<KeySet note={this.state.songArr[this.state.second+3]} />
						<KeySet note={this.state.songArr[this.state.second+2]} />
						<KeySet note={this.state.songArr[this.state.second+1]} />
						<KeySet isPlayer={true} flash={this.state.flash} note={this.state.songArr[this.state.second]} /> 
						<Outline />
						<div className="score">
							<h3>Score</h3>
							<h3>{this.state.score}</h3>
						</div>
						<div className="gameImg">
							<img alt="Jammin with Jimi Game Screen" src={Game} />
						</div>
						<audio src={Fire} autoPlay></audio>﻿
						
					</div>		 	
				</div>
				);
				break;
			case 'winner':
				return (
					<div className="game">
						<div className="instImg">
							<img alt="Jammin with Jimi Winner" src={Instructions} />
							<div className="buttonW">
								<button id="button" onClick={()=>{location="/"}}>Play Again</button>
							</div>
							<div className="winner" >
								<p>Rock On! You got a score of {this.state.score}</p>
								<p>&nbsp;&nbsp;&nbsp;&nbsp;You got a lot of soul</p>
								<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lets jam sometime</p>
							</div>
						</div>
					</div>
					);
				break;
			case 'loser':
				return (
					<div className="game">
						<div className="instImg">
							<img alt="Jammin with Jimi Loser" src={Instructions} />
							<div className="buttonW">
								<button id="button" onClick={()=>{location="/"}}>Play Again</button>
							</div>
							<div className="loser" >
								<p>Nice try, man</p>
								<p>Your score was {this.state.score}</p>
								<p>Better luck next time</p>
							</div>
						</div>
					</div>
					);
				break;	
		}
	}
}