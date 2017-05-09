import React, {PropTypes} from 'react';
import Place from './Place';

const PlaceList = ({places}) => {
	return (
		<div>
			{places.map((place, index) =>
				<Place key={index} place={place} />
			)}
		</div>
	);
};

PlaceList.propTypes = {
	places: PropTypes.array.isRequired
};

export default PlaceList;