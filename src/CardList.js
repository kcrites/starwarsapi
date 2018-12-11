import React from 'react';
import Card from './Card';


const CardList = ({starwars, category}) => {
	
	return (
		<div>
			{
		(<Card 
				key={1}
				name={ (starwars.name) ? starwars.name : starwars.title}
				category={category}
				//films={starwars.films}
			/>)
			}
		</div>
		);
}

export default CardList;