document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Example AJAX request
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, role }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Redirect to dashboard based on role
        window.location.href = '/${role.toLowerCase()}Dashboard.html';
      } else {
        alert('Login failed');
      }
    });
  });