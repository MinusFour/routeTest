import { connect } from 'react-redux';
import { ColorsScene } from './colorsScene';

function mapStateToProps(state, ownProps){
	let currentRoute = ownProps.route,
		colors = currentRoute.colors;

	return { colors };
};

export default connect(mapStateToProps)(ColorsScene);
