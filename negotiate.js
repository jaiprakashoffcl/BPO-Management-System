document.addEventListener('DOMContentLoaded', function() {
    const negotiationForm = document.getElementById('negotiation-form');


    negotiationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Perform finalization of negotiation process
        // For demo purpose, assume negotiation is successfully finalized
        window.location.href = 'upload.html'; // Redirect to data upload page
    });
});