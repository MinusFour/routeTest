import { connect } from 'react-redux';
import { ColorsScene } from './colorsScene';

function mapStateToProps(state, ownProps){
	let currentRoute = state.routes[state.index],
		colors = currentRoute.colors;

	return { colors };
};

export default connect(mapStateToProps)(ColorsScene);
