let slideIndex = 0;

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("carousel-item");
    
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex].style.display = "block";
}

// Initialize the carousel
showSlides(slideIndex);
