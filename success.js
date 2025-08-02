// Function to get a cookie value by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Immediately check if the user is logged in
(function() {
    if (getCookie('login_status') !== 'loggedIn') {
        alert("You are not logged in. Redirecting to login page.");
        window.location.href = 'login.html';
    }
})();

// Handle logout
document.getElementById('logout').addEventListener('click', function(event) {
    // Expire the cookie by setting its max-age to 0
    document.cookie = "login_status=; path=/; max-age=0";
    // The link will then redirect to login.html
});