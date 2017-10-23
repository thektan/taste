import JSXComponent from 'metal-jsx';

class Navbar extends JSXComponent {
	created() {
		this._auth = WeDeploy.auth('auth-taste.wedeploy.io');

		this.signOut = this.signOut.bind(this);
	}

	signOut() {
		this._auth.signOut()
			.then(() => {
				location.href = '/';
			});
	}

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
					<a onClick={this.signOut}>Sign Out</a>
				</li>
				<li>
					<span class="username"></span>
				</li>
			</ul>
		);
	}
}

export default Navbar;
