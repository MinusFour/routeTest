import { connect } from 'react-redux';
import { NavigationExperimental } from 'react-native';
let { CardStack } = NavigationExperimental;

function mapStateToProps(state, ownProps){
	return {
		renderScene : ownProps.renderScene,
		style : ownProps.style,
		navigationState : {
			index : state.index,
			routes : state.routes
		}
	};
}

export default connect(mapStateToProps)(CardStack);
