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

		this.songArr = songArr;

		this.state = {
			second: 0,
			score: 0,
			gameScreen: 'instructions',
			success: '',
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
			this.setState({
				second: this.state.second+1
			});

			if (this.state.second >= this.songArr.length) {
			    if (this.state.score > 45){
		    		this.setState({
		    			second: 0,
		    			gameScreen: 'winner'
		    		});
		    		clearInterval(this.gameInterval);
		    	} else {
		    		this.setState({
		    			second: 0,
		    			gameScreen: 'loser'
		    		});
		    		clearInterval(this.gameInterval);
		    	}
			}

		}

		this.gameInterval = setInterval(beat, 192);


		this.setState({
			gameScreen: 'game'
		})
	
		
 	}

	onKeyDown(event)  {
        console.log(this.state.success);
    	if(event.which === 65 && this.songArr[this.state.second].red){
            this.setState({
            	score: this.state.score+1,
            	success: 'success'
            	});     
        } else if(event.which === 83 && this.songArr[this.state.second].blue){
                this.setState({
            		score: this.state.score+1,
                	success: 'success'
            	}); 
        } else if(event.which === 68 && this.songArr[this.state.second].green){
               this.setState({
            		score: this.state.score+1,
            		success: 'success'

            	}); 
        }else if(event.which === 70 && this.songArr[this.state.second].yellow){
               this.setState({
            		score: this.state.score+1,
            		success: 'success'

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
									everyone’s talking about</p>
							</div>
							<div className="num3" >
								<p>Lets see if you can play <br/>
								&emsp;&emsp;&emsp;one of my tunes</p>
							</div>
							<div className="num4">
								<p>First, let me show you <br/>
								&emsp;&emsp;how to play</p>
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
								the colored box falls into its matching outline</p>
							</div>
							<div className="num8">
								<p>Each correct note increases your score</p>
							</div>
							<div className="num9">
								<p>Click Play to begin</p>
							</div>
					</div>
					);
				break;
			case 'game':
				return(
				<div>		
					<div tabIndex="1" onKeyDown={this.onKeyDown} className="game">							
						<KeySet note={this.songArr[this.state.second+3]} />
						<KeySet note={this.songArr[this.state.second+2]} />
						<KeySet note={this.songArr[this.state.second+1]} />
						<KeySet isPlayer={true} note={this.songArr[this.state.second]} /> 
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
								<button id="button" onClick={this.start}>Play Again</button>
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
								<button id="button" onClick={this.start}>Play Again</button>
							</div>
							<div className="loser" >
								<p>Nice try, man</p>
								<p>Your score was {this.state.score}.</p>
								<p>Better luck next time</p>
							</div>
						</div>
					</div>
					);
				break;	
		}
	}
}