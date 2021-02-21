import React from 'react';
import Card from './Card';

const CardList = ({ doctors }) => {
return (
  <div>
	{doctors.map((user, i) => {
		return (
		<Card
		  key={i}
		  id={doctors[i].id}
		  name={doctors[i].name}
		  year={doctors[i].year}
		/>
			);
		})
	}
  	</div>
  );
}

export default CardList;