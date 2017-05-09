import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './index.css';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';

const store = configureStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
