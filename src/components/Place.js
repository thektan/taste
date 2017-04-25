import React, {PropTypes} from 'react';

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