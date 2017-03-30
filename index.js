import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducers from './reducers/index';
import App from './components/App';

let store = createStore(appReducers);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);


// document.addEventListener('DOMContentLoaded', function() {
// 	ReactDOM.render(
// 		React.createElement(App),
// 		document.getElementById('mount')
// 	);
// });
