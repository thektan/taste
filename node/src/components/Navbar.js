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
					{Auth.currentUser ?
						<span>
							{Auth.currentUser.name}
							<button onClick={Auth.signOut}>Sign Out</button>
						</span>
						: <a href="/login">Sign In</a>
					}
				</li>
			</ul>
		);
	}
}

export default Navbar;
