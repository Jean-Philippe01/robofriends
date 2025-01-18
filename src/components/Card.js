import React, {Component} from 'react';
//import {robots} from './Robots';

const Card = (robots) => {
		return(
			<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> 
				<div>
					<img alt='robots' src={`https://robohash.org/${robots.id}?200x200`}/>
					<div>
						<h2>{robots.name}</h2>
						<p>{robots.email}</p>
					</div>
				</div>
			</div>
			);
}

export default Card;