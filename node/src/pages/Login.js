import JSXComponent from 'metal-jsx';

class Login extends JSXComponent {
	created() {
		this._auth = WeDeploy.auth('auth-taste.wedeploy.io');

		if (this._auth.currentUser) {
			document.querySelector('.username').innerHTML = this._auth.currentUser.name;
		}

		this.signIn = this.signIn.bind(this);
	}

	signIn(event) {
		event.preventDefault();

		this._auth.signInWithEmailAndPassword(user.email.value, user.password.value)
			.then(function () {
				document.location.href = '/';
			})
			.catch(function () {
				alert('Sign-in failed. Try another email/password.');
			});

		return false;
	}

	render() {
		return (
			<div>
				<h1>{'Login'}</h1>

				<form name="user" class="container" onSubmit={this.signIn}>
					<input name="email" type="email" placeholder="Email" required />
					<input name="password" type="password" placeholder="Password" required />
					<button type="submit">{'Login'}</button>
				</form>

				<a href="/signup">{'Create an account'}</a>
			</div>
		);
	}
}

export default Login;
