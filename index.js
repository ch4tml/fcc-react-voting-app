import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import appReducers from './reducers/index';
import App from './components/App';
import Router from './routes';

let store = createStore(appReducers);

render(
	<Provider store={store}>
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
