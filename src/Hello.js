import React, {Component} from 'react';
import './Hello.css';



const Hello = (props) => {
	return (
		<div className="f1 tc">
			<h1>War of the Worlds</h1>
			<p>{props.greeting}</p>
		</div>
	);
}

export default Hello;