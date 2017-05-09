import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlaceInput extends Component {
	constructor(props) {
		super(props);

		this.onAddPlaceClick = this.onAddPlaceClick.bind(this);
	}

	/**
	 * Add the place and reset the fields.
	 */
	onAddPlaceClick() {
		const nameElement = document.getElementById('name');
		const locationElement = document.getElementById('location');

		this.props.addPlace({
			name: nameElement.value,
			location: locationElement.value
		});

		// Clear fields and focus on name input.
		nameElement.value = '';
		locationElement.value = '';

		nameElement.focus();
	}

	/**
	 * Initially focus on name input when loaded.
	 */
	componentDidMount() {
		document.getElementById('name').focus();
	}

	/**
	 * Render input fields and add button.
	 * @return {jsx} Input fields with button.
	 */
	render() {
		return (
			<div>
				<input id="name" type="text" placeholder="Name" />
				<input id="location" type="text" placeholder="Location" />
				<button onClick={this.onAddPlaceClick}>Add Place</button>
			</div>
		);
	}
}

PlaceInput.propTypes = {
	addPlace: PropTypes.func.isRequired
};

export default PlaceInput;