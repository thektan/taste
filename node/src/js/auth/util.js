export const AUTH = WeDeploy.auth('auth-taste.wedeploy.io');

// Data of the user signed in.
export const { currentUser } = AUTH;

/**
 * Signs in a user and redirects to the home page.
 */
export function signIn(event) {
  event.preventDefault();

  const form = event.target;

  AUTH.signInWithEmailAndPassword(form.email.value, form.password.value)
    .then(({ id }) => {
      document.location.href = `/user/${id}`;
    })
    .catch(() => alert('Sign-in failed. Try another email/password.'));

  return false;
}

/**
 * Signs a user out and redirects to the home page.
 */
export function signOut() {
  AUTH.signOut().then(() => (location.href = '/'));
}

/**
 * Creates a new account and signs them in on success.
 */
export function createAccount(event) {
  event.preventDefault();

  const form = event.target;

  AUTH.createUser({
    email: form.email.value,
    name: form.name.value,
    password: form.password.value
  })
    .then(() => {
      alert('Account successfully created!');

      signIn(event);
    })
    .catch(() => alert('Sign-up failed. Try another email.'));

  return false;
}
