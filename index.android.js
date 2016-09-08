/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	BackAndroid
} from 'react-native';
import { Provider } from 'react-redux';
import SmartNavigator from './smartNavigator';
import ColorsSmart from './colorsSmart';
import { IndexScene } from './indexScene';
import { store, dispatchPopScene } from './store';

class routeTest extends Component {
	constructor(props){
		super(props);
		this.renderScene = this.renderScene.bind(this);
	}

	renderScene({ scene }){
		let route = scene.route;
		switch(route.sceneName){
			case 'index':
				return <IndexScene />;
			case 'colors':
				return <ColorsSmart route={route}/>;
			default:
				return null;
		};
	}
	render(){
		return (
			<Provider store={store}>
				<SmartNavigator style={styles.navigator} renderScene={this.renderScene}/>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	navigator : {
		flex : 1
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

BackAndroid.addEventListener('hardwareBackPress', function(){
	let state = store.getState();
	if(state.index > 0){
		dispatchPopScene();
		return true;
	}
	return false;
});

AppRegistry.registerComponent('routeTest', () => routeTest);
