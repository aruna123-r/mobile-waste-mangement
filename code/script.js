const loginBtn = document.getElementById('login-btn');
const navLinks = document.querySelectorAll('.nav-link');

// Function to check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('loggedInUser') !== null;
}

// 1️⃣ Show or hide login button based on login state
if (isLoggedIn()) {
    loginBtn.style.display = 'none'; // Hide login if already logged in
} else {
    loginBtn.style.display = 'inline-block'; // Show login if not logged in
}

// 2️⃣ Navigation click handler for all buttons/links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        if (!isLoggedIn()) {
            e.preventDefault(); // Stop navigation
            window.location.href = 'login.html'; // Redirect to login
        }
    });
});

// 3️⃣ Login button behavior
loginBtn.addEventListener('click', () => {
    if (isLoggedIn()) {
        // Logout the user
        localStorage.removeItem('loggedInUser');
        alert('You have been logged out!');
        loginBtn.style.display = 'inline-block';
        window.location.reload();
    } else {
        // Not logged in → go to login page
        window.location.href = 'login.html';
    }
});
