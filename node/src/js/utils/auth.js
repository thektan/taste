/**
 * Functions to interact with WeDeploy Auth to manage users.
 */

import WeDeploy from 'wedeploy';

export const AUTH = WeDeploy.auth('auth-taste.wedeploy.io');

// Data of the user signed in.
export const { currentUser } = AUTH;

/**
 * Signs in a user and redirects to the home page.
 * https://wedeploy.com/docs/auth/sign-in-with-password/
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
 * Signs a user out.
 * https://wedeploy.com/docs/auth/manage-users/
 * @return {Promise}
 */
export function signOut() {
  return AUTH.signOut();
}

/**
 * Creates a new account and signs them in on success.
 * @return {Promise}
 */
export function signUp(event) {
  event.preventDefault();

  const form = event.target;

  return AUTH.createUser({
    email: form.email.value,
    name: form.name.value,
    password: form.password.value
  });
}
