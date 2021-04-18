import React from 'react';
import Card from './Card';

const CardList = ({ alumni }) => {
	return (
		<div>
			{
			    alumni.map((user, i) => {
					return (
						<Card 
							key={i} 
							id={alumni[i].id} 
							name={alumni[i].name} 
							email={alumni[i].email}
						/>
					);
				})
			}
  		</div>
	);
}

export default CardList;