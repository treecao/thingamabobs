async function loginFormHandler(event) {
  // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/sell');
        console.log('Login successful');
      } else {
        alert(response.statusText);
      }
    }
  }
// For new user signup
const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };

// Event listeners for the login and signup buttons. 
  document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);


  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);