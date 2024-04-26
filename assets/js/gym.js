// Define a function to set up event listeners after the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Slideshow functionality
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        const slides = document.getElementsByClassName("mySlides");
        if (slides.length === 0) {
            return; // No slides found, exit the function
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }    
        slides[slideIndex - 1].style.display = "block";  
        setTimeout(showSlides, 5000); // Change image every 5 seconds
    }

    // Function to change slides
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Event listener for navigation arrows
    document.querySelector('.prev').addEventListener('click', function() {
        plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        plusSlides(1);
    });

    // Reset slideshow when page is loaded
    function resetSlides() {
        slideIndex = 0;
        showSlides();
    }

    window.addEventListener('load', function() {
        resetSlides();
    });

    // Function to reset the form after submission
    function resetForm(form) {
        form.reset();
    }

    // Event listener for BMI form submission
    const bmiForm = document.getElementById('bmi-form');
    if (bmiForm) {
        bmiForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const height = parseFloat(document.getElementById('height').value);
            const weight = parseFloat(document.getElementById('weight').value);

            if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
                alert('Please enter valid height and weight.');
                return;
            }

            // BMI calculation
            const heightInMeters = height / 100; // Convert height from cm to meters
            const bmi = weight / (heightInMeters * heightInMeters);

            // Interpretation
            let interpretation;
            if (bmi < 18.5) {
                interpretation = 'Underweight';
            } else if (bmi < 24.9) {
                interpretation = 'Normal weight';
            } else if (bmi < 29.9) {
                interpretation = 'Overweight';
            } else {
                interpretation = 'Obese';
            }

            // Display BMI result
            alert(`Your BMI: ${bmi.toFixed(1)} (${interpretation})`);
            resetForm(event.target);
        });
    }

    // Event listener for membership form submission using event delegation
    document.addEventListener('submit', function (event) {
        if (event.target && event.target.id === 'membership-form') {
            event.preventDefault();

            // Validation and submission logic for the membership form can be added here

            // Display a courteous thank you message including the name of the gym
            alert(`Thank you for choosing Fitness Studio! We appreciate your interest in our gym.`);

            // Reset the form
            resetForm(event.target);
        }
    });
});


