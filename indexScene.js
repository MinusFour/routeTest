import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	TouchableOpacity,
	Text
} from 'react-native';

import { dispatchPushScene } from './store';

export class IndexScene extends Component {
	render(){
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.button} onPress={dispatchPushScene.bind(null, 'colors')}>
					<Text>To Colors!</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	button : {
		backgroundColor : '#D7D7D7',
		padding: 5
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
});

