document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const registerLink = document.getElementById('register-link');
    const loginLink = document.getElementById('login-link');
    const registerSection = document.getElementById('register-section');
    const loginSection = document.getElementById('login-section');


    registerLink.addEventListener('click', function(event) {
        event.preventDefault();
        registerSection.style.display = 'block';
        loginSection.style.display = 'none';
    });


    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        registerSection.style.display = 'none';
        loginSection.style.display = 'block';
    });


    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
      // Perform login validation and authentication
      // For demo purpose, assume login is successful and redirect to dashboard
        window.location.href = 'dashboard.html'; // Redirect to dashboard page
    });


    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Perform registration process
        // For demo purpose, just redirect to dashboard after registration
        window.location.href = 'dashboard.html'; // Redirect to dashboard page
    });
});