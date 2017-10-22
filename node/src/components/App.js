import JSXComponent from 'metal-jsx';
import Router from 'metal-router';

import Navbar from './Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';

import '../css/App.scss';

class App extends JSXComponent {
	attached() {
		Router.router().dispatch();
	}

	render() {
		return (
			<div id="app">
				<Navbar />

				<Router component={Home} path="/" />
				<Router component={About} path="/about" />
				<Router component={Login} path="/login" />
			</div>
		);
	}
}

new App({element: '#root'});
