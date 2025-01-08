let slideIndex = 1;
let autoSlideInterval;

showSlides(slideIndex); // Display the first slide
startAutoSlide(); // Start the auto slider

// Increment or decrement slide index
function plusSlides(n) {
  showSlides(slideIndex += n);
  resetAutoSlide(); // Reset the auto slider after manual control
}

// Set slide index to clicked dot's number
function currentSlide(n) {
  showSlides(slideIndex = n);
  resetAutoSlide(); // Reset the auto slider after manual control
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Wrap around the slide index if it goes out of range
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove the "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and highlight the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Start the auto slider
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    plusSlides(1); // Move to the next slide
  }, 6000); // Change slide every 3 seconds
}

// Reset the auto slider
function resetAutoSlide() {
  clearInterval(autoSlideInterval); // Clear the interval
  startAutoSlide(); // Restart the auto slider
}
