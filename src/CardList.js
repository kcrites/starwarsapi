import React from 'react';
import Card from './Card';


const CardList = ({starwars}) => {
	
	return (
		<div>
			{
		(<Card 
				key={1}
				name={ (starwars.name) ? starwars.name : starwars.title}
				//homeworld={starwars.homeworld}
				//films={starwars.films}
			/>)
			}
		</div>
		);
}

export default CardList;