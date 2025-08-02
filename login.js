document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // A real site would validate against a server. Here, we just check if fields are filled.
    if (username && password) {
        // Set a cookie to indicate the user has passed the first login step.
        // This cookie will expire in 10 minutes (600 seconds).
        document.cookie = "login_status=pending_access_code; path=/; max-age=600";
        // Redirect to the access code page
        window.location.href = 'access-code.html';
    } else {
        alert('Please enter both username and password.');
    }
});