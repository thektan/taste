import React from 'react';
import PropTypes from 'prop-types';
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