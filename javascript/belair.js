var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 1000); // Change image every 2 seconds
}





var slideshowIndex = 1;
showSlidesShow(slideshowIndex);

// Next/previous controls
function plusSlides(n) {
  showSlidesShow(slideshowIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlidesShow(slideshowIndex = n);
}

function showSlidesShow(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideshowIndex = 1}
  if (n < 1) {slideshowIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideshowIndex-1].style.display = "block";
  dots[slideshowIndex-1].className += " active";
  captionText.innerHTML = dots[slideshowIndex-1].alt;
}