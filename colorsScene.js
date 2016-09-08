import React, { Component } from 'react';
import {
	View,
	TouchableOpacity
} from 'react-native';

import { dispatchAddColors, dispatchPushScene } from './store';

export class ColorsScene extends Component {

	componentWillMount(){
		//Do a query to add colors
		dispatchAddColors();
	}

	renderColors(colors){
		if(!colors) return null;
		return colors.map((color, index) => {
			return <TouchableOpacity onPress={dispatchPushScene.bind(null, 'colors')} key={index} style={{ flex : 1, backgroundColor: color }}/>;
		});
	}

	render(){
		return (
			<View style={{ flex : 1 }}>
				{this.renderColors(this.props.colors)}
			</View>
		);
	}
}
