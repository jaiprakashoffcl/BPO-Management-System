document.addEventListener('DOMContentLoaded', function() {
    const applyForm = document.getElementById('apply-form');
    const confirmationMessage = document.getElementById('confirmation-message')
;


    applyForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Perform form submission
        // For demo purpose, assume form submission is successful
        // Show confirmation message
        confirmationMessage.style.display = 'block';
        // Redirect to upload page after a short delay (for demonstration)
        setTimeout(function() {
            window.location.href = 'upload.html';
        }, 3000); // 3000 milliseconds = 3 seconds
    });
});