import JSXComponent from 'metal-jsx';

class Login extends JSXComponent {
	created() {
		var auth = WeDeploy.auth('auth-taste.wedeploy.io');

		if (auth.currentUser) {
			document.querySelector('.username').innerHTML = auth.currentUser.name;
		}
	}

	submitForm() {
		auth.createUser({
			email: user.email.value,
			name: user.name.value,
			password: user.password.value
		})
			.then(function() {
				alert('Account successfully created!');
				signIn();
				user.reset();
			})
			.catch(function() {
				alert('Sign-up failed. Try another email.');
				user.reset();
			});
	}

	signIn() {
		auth.signInWithEmailAndPassword(user.email.value, user.password.value)
			.then(function () {
				document.location.href = '/welcome.html';
			})
			.catch(function () {
				alert('Sign-in failed. Try another email/password.');
			});
	}

	render() {
		return (
			<div>
				<h1>Login</h1>

				<form name="user" class="container" onsubmit="signIn(); return false;">
					<h1>Sign In</h1>
					<input name="email" type="email" placeholder="Email" required>
					<input name="password" type="password" placeholder="Password" required>
					<button type="submit">Submit</button>
					<a href="signup.html">Create an account</a>
				</form>
			</div>
		);
	}
}

export default Login;
