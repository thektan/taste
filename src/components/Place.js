import React from 'react';
import PropTypes from 'prop-types'

const Place = ({place}) => {
	return (
		<div>
			{place.name} - {place.location}
		</div>
	);
};

Place.propTypes = {
	place: PropTypes.object.isRequired
};

export default Place;