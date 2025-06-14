function toggleForm() {
  document.getElementById('auth-form').classList.toggle('hidden');
  document.getElementById('register-form').classList.toggle('hidden');
}

function register() {
  const username = document.getElementById('new-username').value;
  const password = document.getElementById('new-password').value;

  if (username && password) {
    localStorage.setItem('user', JSON.stringify({ username, password }));
    alert('Registration successful! You can now login.');
    toggleForm();
  } else {
    alert('Please fill in both fields.');
  }
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (storedUser && storedUser.username === username && storedUser.password === password) {
    document.getElementById('auth-form').classList.add('hidden');
    document.getElementById('secure-page').classList.remove('hidden');
  } else {
    alert('Invalid credentials.');
  }
}

function logout() {
  document.getElementById('secure-page').classList.add('hidden');
  document.getElementById('auth-form').classList.remove('hidden');
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
}
