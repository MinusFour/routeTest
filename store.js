import { createStore } from 'redux';
import { NavigationExperimental } from 'react-native';
let { StateUtils } = NavigationExperimental;


//Config

let colors = [
	['#FADC4F', '#FF4580', '#00E9A8', '#5FFF64', '#EE7EFF'], //light
	['#8E0000', '#784B00', '#091493', '#8F0082', '#1B8000'] //dark
];

let enableRaceCondition = false;

let display = 0;
//Actions:

const POP_SCENE = 'POP_SCENE',
	PUSH_SCENE = 'PUSH_SCENE',
	ADD_COLORS = 'ADD_COLORS';

let pushScene = routeName => {
	return { type : PUSH_SCENE, routeName };
};

let popScene = () => {
	return { type : POP_SCENE };
};

let addColors = colors => {
	return { type : ADD_COLORS, colors };
};

//reducer

let reducer = (state, action) => {
	switch(action.type){
		case POP_SCENE:
			return StateUtils.pop(state);
		case PUSH_SCENE:
			let route = { key : state.routes.length.toString(), sceneName : action.routeName };
			return StateUtils.push(state, route);
		case ADD_COLORS:
			//Copy Navigation State and the current route
			let nextState = { ...state, routes : state.routes.slice() },
				currentRoute = nextState.routes[nextState.index],
				nextRoute = { ...currentRoute, colors : action.colors };

			//update route object with new one that includes colors
			nextState.routes[nextState.index] = nextRoute;
			return nextState;
		default:
			return state;
	}
};


//initialState

let initialState = {
	index : 0,
	routes : [{
		key : '0',
		sceneName : 'index'
	}]
};

//Create store
let store = createStore(reducer, initialState);

//dispatchers
let dispatch = store.dispatch.bind(store);

let dispatchPushScene = sceneName => {
	dispatch(pushScene(sceneName));
	toggleDisplay();
};

let dispatchPopScene = () => {
	dispatch(popScene());
	toggleDisplay();
};

let dispatchAddColors = () => {
	//simulate async stuff
	setTimeout(function(){
		dispatch(addColors(shuffle(colors[display].slice())));
	}, enableRaceCondition ? 180 + Math.random() * 100 : 300);
};

//small shuffle function taken from:
//https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
function shuffle(a) {
	var j, x, i;
	for (i = a.length; i; i--) {
		j = Math.floor(Math.random() * i);
		x = a[i - 1];
		a[i - 1] = a[j];
		a[j] = x;
	}
	return a;
};

function toggleDisplay(){
	display = display === 0 ? 1 : 0;
}

export { store, dispatchPushScene, dispatchPopScene, dispatchAddColors };
