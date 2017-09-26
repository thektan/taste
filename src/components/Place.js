import JSXComponent from 'metal-jsx';
import {Map} from 'immutable';

import { connect } from 'metal-redux';
import { create } from '../actions/place'

class Place extends JSXComponent {
	created() {
		this.createPlace = this.createPlace.bind(this);
	}

	createPlace() {
		console.log('create place clicked');
		this.props.create();
	}

	render() {
		return (
			<div>
				<button onClick={this.createPlace}>{this.props.place.get('name')}</button>
			</div>
		);
	}
}

export default connect(
	(state, ownProps) => {
		console.log(state.place.getIn([123]))
		return {
			place: state.place.getIn([123], Map())
		};
	},
	{
		create
	}
)(Place);
