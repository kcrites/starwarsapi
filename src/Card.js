import React from 'react';

const Card = (props) => {
	const { name, category } = props;
	return(
		
		<div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow'>
			<h2>{name}</h2>
			
			<p>{category}</p>
		</div>
		);
}

export default Card;