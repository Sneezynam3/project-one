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











  function showImages() {
    // get the car
    var myCar = document.getElementById('car');

    // get the current value of the car's display property
    var displaySetting = myCar.style.display;

    // also get the car button, so we can change what it says
    var carButton = document.getElementById('button');

    // now toggle the car and the button text, depending on current state
    if (displaySetting == 'block') {
      // car is visible. hide it
      myCar.style.display = 'none';
      // change button text
      carButton.innerHTML = 'Show car';
    }
    else {
      // car is hidden. show it
      myCar.style.display = 'block';
      // change button text
      carButton.innerHTML = 'Hide car';
    }
  }


function fn1 () {
  var rd1 = document.getElementById("rd1");
  var rd2 = document.getElementById("rd2");
  var rd3 = document.getElementById("rd3");

  if(rd1.checked == true)
      alert("You would paint the car "+rd1.value+"!");
  else if(rd2.checked == true)
      alert("You would paint the car "+rd2.value+"!");
  else if(rd3.checked == true)
      alert("You would paint the car "+rd3.value+"!");
  else
    alert("Please select an option to vote!")
}