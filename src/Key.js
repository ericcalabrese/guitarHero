import React from 'react';
import './Key.css';

export default function Key(props) {
	const colorCss = props.active ? props.color : "";
	console.log(props.isPlayer);
	return (
		<div className={`key ${colorCss}`}>
		</div>
	)
}