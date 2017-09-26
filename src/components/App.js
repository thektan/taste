import JSXComponent from 'metal-jsx';
import Router from 'metal-router';
import {Map} from 'immutable';
import { createStore } from 'redux';
import { Provider } from 'metal-redux';
import reducers from '../reducers';

import Navbar from './Navbar';

import Home from '../pages/Home';
import About from '../pages/About';

import '../css/App.scss';

const store = createStore(reducers, Map(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends JSXComponent {
	attached() {
		Router.router().dispatch();
	}

	render() {
		return (
			<Provider store={store}>
				<div id="app">
					<Navbar />

					<Router component={Home} path="/" />
					<Router component={About} path="/about" />
				</div>
			</Provider>
		);
	}
}

new App({element: '#root'});
