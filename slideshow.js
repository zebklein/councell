let slideIndex = 0;
let slideInterval;
let numSlides;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    numSlides = slides.length;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;    
    }
    // console.log("Displaying slide at index:", slideIndex - 1);
    slides[slideIndex - 1].style.display = "block";  
}

// Function to start the slideshow with a set interval
function startSlideshow() {
    slideInterval = setInterval(() => {
        showSlides();
    }, 5000); // Adjust the time interval between slides as needed
}

// Function to clear any existing intervals and move to the next/previous slide
function plusSlides(n) {
    clearInterval(slideInterval); // Stop any previous interval
    slideIndex += n - 1;
    if (slideIndex == -1) {
        slideIndex = numSlides - 1
    }
    showSlides();
    startSlideshow(); // Restart the interval timer
}

// Start the slideshow when the page loads
showSlides();
startSlideshow();
