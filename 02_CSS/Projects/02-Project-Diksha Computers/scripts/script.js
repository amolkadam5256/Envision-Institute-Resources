{
    document.addEventListener('DOMContentLoaded', () => {
        const checkbox = document.getElementById('check');
        const menu = document.querySelector('.manu-btn');

        // Optional: Close menu when clicking outside
        document.addEventListener('click', (event) => {
            const isMenu = menu.contains(event.target);
            const isMenuIcon = checkbox.parentElement.contains(event.target);

            if (!isMenu && !isMenuIcon) {
                checkbox.checked = false;
            }
        });

        // Optional: Toggle visibility manually
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                menu.style.display = 'block';
            } else {
                menu.style.display = 'none';
            }
        });


    });
}


//  nav bar on scroll up show and down hide 
{

    const navbar = document.getElementById("navbar");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
            // Scroll down - hide navbar
            navbar.classList.add("hidden");
        } else {
            // Scroll up - show navbar
            navbar.classList.remove("hidden");
        }
        lastScrollY = window.scrollY;
    });

}



// slider review
{

    let slideIndex = 1;
    let autoSlideInterval;

    showSlides(slideIndex); // Display the first slide
    startAutoSlide(); // Start the auto slider

    // Increment or decrement slide index
    function plusSlides1(n) {
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
        let slides = document.getElementsByClassName("slider-box");
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
            dots[i].className = dots[i].className.replace("active", "");
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

}