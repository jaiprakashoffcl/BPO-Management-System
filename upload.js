document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('upload-form');
    const confirmationMessage = document.getElementById('confirmation-message')
;
    const downloadLink = document.getElementById('download-link');


    uploadForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Perform data upload process
        // For demo purpose, assume data upload is successful
        // Show confirmation message and enable download link
        confirmationMessage.style.display = 'block';
        downloadLink.style.display = 'block';
    });


    downloadLink.addEventListener('click', function(event) {
        event.preventDefault();
        // Redirect to payment page after clicking download link
        window.location.href = 'payment.html';
    });
});