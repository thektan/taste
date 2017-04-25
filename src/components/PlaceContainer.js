import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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

function mapStateToProps(state, props) {
	return {
		places: state.place
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(placeActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceContainer);
