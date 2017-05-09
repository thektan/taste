import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as placeActions from '../actions/place-actions';
import PlaceList from './PlaceList';
import PlaceInput from './PlaceInput';

class PlaceContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			places: []
		};
	}

	render() {
		const {places} = this.props;

		return (
			<div>
				<PlaceInput addPlace={this.props.actions.addPlace} />
				<PlaceList places={places} />
			</div>
		);
	}
}

PlaceContainer.propTypes = {
	places: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	places: state.places
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(placeActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceContainer);
