"use strict";

document.addEventListener('DOMContentLoaded', function () {
    // Slideshow functionality
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var slideshowContainer = document.getElementById("slideshow-container");
        if (!slideshowContainer) {
            return; // No slideshow container found, exit the function
        }

        var slides = [
             "assets/images/hero18.png",
            "assets/images/hero19.png",
            "assets/images/hero12.jpeg",
            
        ];

        // Clear existing slides
        slideshowContainer.innerHTML = "";

        // Add new slides dynamically
        for (var i = 0; i < slides.length; i++) {
            var slide = document.createElement("div");
            slide.classList.add("mySlides", "fade");
            var img = document.createElement("img");
            img.src = slides[i];
            img.style.width = "100%";
            slide.appendChild(img);
            slideshowContainer.appendChild(slide);
        }

        slideIndex++;
        var allSlides = document.getElementsByClassName("mySlides");
        if (slideIndex > allSlides.length) {
            slideIndex = 1;
        }

        // Hide all slides
        for (var _i = 0; _i < allSlides.length; _i++) {
            allSlides[_i].style.display = "none";
        }

        // Display current slide
        allSlides[slideIndex - 1].style.display = "block";

        setTimeout(showSlides, 5000); // Change image every 5 seconds
    }

    // Function to change slides
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Reset slideshow when page is loaded
    function resetSlides() {
        slideIndex = 0;
        showSlides();
    }

    window.addEventListener('load', function () {
        resetSlides();
    });

    // Event listener for navigation arrows
    document.querySelector('.prev').addEventListener('click', function () {
        plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', function () {
        plusSlides(1);
    });

    // Function to reset the form after submission
    function resetForm(form) {
        form.reset();
    }

    // Event listener for BMI form submission
    var bmiForm = document.getElementById('bmi-form');
    if (bmiForm) {
        bmiForm.addEventListener('submit', function (event) {
            event.preventDefault();

            var height = parseFloat(document.getElementById('height').value);
            var weight = parseFloat(document.getElementById('weight').value);

            if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
                alert('Please enter valid height and weight.');
                return;
            }

            // BMI calculation
            var heightInMeters = height / 100; // Convert height from cm to meters
            var bmi = weight / (heightInMeters * heightInMeters);

            // Interpretation
            var interpretation;
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
            alert("Your BMI: ".concat(bmi.toFixed(1), " (").concat(interpretation, ")"));
            resetForm(event.target);
        });
    }

    // Event listener for membership form submission using event delegation
    document.addEventListener('submit', function (event) {
        if (event.target && event.target.id === 'membership-form') {
            event.preventDefault();

            // Validation and submission logic for the membership form can be added here

            // Display a courteous thank you message including the name of the gym
            alert("Thank you for choosing Fitness Studio! We appreciate your interest in our gym.");

            // Reset the form
            resetForm(event.target);
        }
    });
});





