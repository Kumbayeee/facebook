// Function to get a cookie value by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Check if the user should be on this page
if (getCookie('login_status') !== 'pending_access_code') {
    // If the cookie isn't set, redirect back to the login page
    alert("Session expired or invalid. Please log in again.");
    window.location.href = 'login.html';
}

document.getElementById('accessCodeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const accessCode = document.getElementById('accessCode').value;
    const correctAccessCode = '123456'; // This is a mock access code for demonstration

    if (accessCode === correctAccessCode) {
        // If the code is correct, set a new cookie to grant access
        document.cookie = "login_status=loggedIn; path=/; max-age=600";
        // Redirect to the success page
        window.location.href = 'success.html';
    } else {
        alert('The access code is incorrect. Please try again.');
    }
});