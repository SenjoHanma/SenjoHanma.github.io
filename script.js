function validatePassword(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const protectedContent = document.getElementById('protected-content');
    const loginContainer = document.querySelector('.login-container');

    // Set your password here
    const correctPassword = '10052024';

    if (password === correctPassword) {
        // Hide login container with animation
        loginContainer.classList.add('fade-out');
        
        // After the animation ends, show the protected content
        setTimeout(() => {
            loginContainer.style.display = 'none';
            protectedContent.style.display = 'block';
        }, 1000); // Duration should match the fade-out animation
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = 'Incorrect password. Please try again.';
    }
}
