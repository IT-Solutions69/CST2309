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

        setTimeout(showSlides, 15000); // Change image every 15 seconds
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

    // Load Google Maps API asynchronously
    function loadGoogleMaps() {
        var script = document.createElement('script');
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBuLi-Tc5k39MdPzXu5eo5Gtc_Z9ctOElY&callback=initMap&libraries=maps,marker&v=beta&async=1";
        script.async = true;
        document.body.appendChild(script);
    }

    // Initialize Google Map
    function initMap() {
        var mapOptions = {
            center: { lat: 40.72874069213867, lng: -74.00957489013672 },
            zoom: 14,
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var marker = new google.maps.marker.AdvancedMarkerElement({
            position: { lat: 40.72874069213867, lng: -74.00957489013672 },
            map: map,
            title: 'Strength Gym'
        });
    }

    // Load Google Maps API
    loadGoogleMaps();
});





