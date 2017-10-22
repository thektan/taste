import JSXComponent from 'metal-jsx';

class SignUp extends JSXComponent {
	created() {
		this._auth = WeDeploy.auth('auth-taste.wedeploy.io');

		if (this._auth.currentUser) {
			document.querySelector('.username').innerHTML = this._auth.currentUser.name;
		}

		this.submitForm = this.submitForm.bind(this);
		this.signIn = this.signIn.bind(this);
	}

	submitForm(event) {
		event.preventDefault();

		console.log('hello', this._auth);
		console.log('hello', this._auth.createUser);

		this._auth.createUser({
			email: user.email.value,
			name: user.name.value,
			password: user.password.value
		})
			.then(function () {
				alert('Account successfully created!');
				this.signIn();
				user.reset();
			})
			.catch(function () {
				alert('Sign-up failed. Try another email.');
				user.reset();
			});

		return false;
	}

	signIn() {
		this._auth.signInWithEmailAndPassword(user.email.value, user.password.value)
			.then(function () {
				document.location.href = '/';
			})
			.catch(function () {
				alert('Sign-in failed. Try another email/password.');
			});
	}


	render() {
		return (
			<div>
				<h1>{'Login'}</h1>

				<form name="user" class="container" onSubmit={this.submitForm}>
					<h1>{'Sign Up'}</h1>
					<input name="name" type="text" placeholder="Name" required />
					<input name="email" type="email" placeholder="Email" required />
					<input name="password" type="password" placeholder="Password" required />
					<button type="submit">{'Submit'}</button>
					<a href="/login">{'Back to login'}</a>
				</form>
			</div>
		);
	}
}

export default SignUp;
