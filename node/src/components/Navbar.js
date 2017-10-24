import JSXComponent from 'metal-jsx';
import * as Auth from '../auth/Auth';

class Navbar extends JSXComponent {
	render() {
		return (
			<ul role="navigation">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
				<li>
					<a onClick={Auth.signOut}>Sign Out</a>
				</li>
				<li>
					<span class="username"></span>
				</li>
			</ul>
		);
	}
}

export default Navbar;
