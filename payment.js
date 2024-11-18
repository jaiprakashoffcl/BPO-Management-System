document.addEventListener('DOMContentLoaded', function() {
    const paymentForm = document.getElementById('payment-form');


    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Perform payment processing
        // For demo purpose, assume payment is successful
        alert('Payment successful! Thank you for your payment.');
        // Redirect to a success page or perform other actions as needed
        window.location.href = 'success.html';
    });
});