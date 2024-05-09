document.addEventListener('DOMContentLoaded', function () {
    // Handle membership form submission
    const membershipForm = document.getElementById('membership-form');
    membershipForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Extract form data (with optional chaining for error handling)
        const name = document.getElementById('name')?.value || "";
        const plan = document.getElementById('membership-plan')?.value || "";
        const price = document.getElementById('membership-price')?.value || "";

        // Validation
        let errorMessage = ""; // String to store error messages

        if (!name.trim()) {
            errorMessage += "Please enter your name.\n";
        }

        if (!plan) {
            errorMessage += "Please select a membership plan.\n";
        }

        if (!price) {
            errorMessage += "Please enter the membership price.\n";
        }

        // Display error message or process form if valid
        if (errorMessage) {
            alert(errorMessage);
            return; // Exit if validation fails
        }

        // Local form processing (example - display success message)
        const message = `Thank you, ${name}, for choosing Strength Gym! You have selected the ${plan} plan at $${price} per month. Welcome aboard!`;
        const responseMessage = document.createElement('div');
        responseMessage.textContent = message;
        responseMessage.classList.add('success-message'); // Add a class for styling (optional)
        membershipForm.parentElement.appendChild(responseMessage);

        // Reset the form (optional)
        membershipForm.reset();

        // Hide response message after 5 seconds (optional)
        setTimeout(function () {
            responseMessage.style.display = 'none';
        }, 5000);
    });
});
