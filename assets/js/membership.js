document.addEventListener('DOMContentLoaded', function () {
    "use strict";
    // Handle membership form submission
    const membershipForm = document.getElementById('membership-form');
    membershipForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Extract form data (with optional chaining for error handling)
        const name = document.getElementById('name')?.value || "";
        const planElement = document.getElementById('membership-plan');
        const plan = planElement?.value || "";
        const price = planElement.options[planElement.selectedIndex].getAttribute('data-price') || "";
        const email = document.getElementById('email')?.value || "";
        const phone = document.getElementById('phone')?.value || "";
        const creditCard = document.getElementById('credit-card')?.value || "";
        const expMonth = document.getElementById('exp-month')?.value || "";
        const expYear = document.getElementById('exp-year')?.value || "";
        const cardType = document.getElementById('card-type')?.value || "";
        const cvc = document.getElementById('cvc')?.value || "";

        // Validation
        let errorMessage = ""; // String to store error messages

        if (!name.trim()) {
            errorMessage += "Please enter your name.\n";
        }

        if (!email.trim()) {
            errorMessage += "Please enter your email.\n";
        }

        if (!phone.trim()) {
            errorMessage += "Please enter your phone number.\n";
        }

        if (!plan) {
            errorMessage += "Please select a membership plan.\n";
        }

        if (!creditCard.trim()) {
            errorMessage += "Please enter your credit card number.\n";
        }

        if (!expMonth.trim() || !expYear.trim()) {
            errorMessage += "Please enter the expiration month and year.\n";
        }

        if (!cardType) {
            errorMessage += "Please select a card type.\n";
        }

        if (!cvc.trim()) {
            errorMessage += "Please enter the CVC.\n";
        }

        // Display error message or process form if valid
        if (errorMessage) {
            alert(errorMessage);
            return; // Exit if validation fails
        }

        // Local form processing (example - display success message)
        const message = `Thank you, ${name}, for choosing Strength Gym! You have selected the ${plan} plan at $${price} per month. Welcome aboard!`;
        alert(message);

        // Reset the form (optional)
        membershipForm.reset();
    });
});
