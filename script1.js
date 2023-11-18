let users = [];

const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

registerForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const regUsernameInput = document.getElementById('regUsername').value;
  const regPasswordInput = document.getElementById('regPassword').value;

  const existingUser = users.find(u => u.username === regUsernameInput);
  
  if (!existingUser) {
    users.push({ username: regUsernameInput, password: regPasswordInput });
    message.textContent = 'Registration successful! Please log in.';
  } else {
    message.textContent = 'Username already exists. Please choose a different one.';
  }
  
  registerForm.reset();
});

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const usernameInput = document.getElementById('username').value;
  const passwordInput = document.getElementById('password').value;

  const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

  if (user) {
    message.textContent = 'Login successful! Redirecting...';
    setTimeout(() => {
      window.location.href = 'secured.html'; // Redirect to secured page
    }, 2000);
  } else {
    message.textContent = 'Invalid username or password. Please try again.';
  }
  
  loginForm.reset();
});