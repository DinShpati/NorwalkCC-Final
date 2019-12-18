//Main slide show
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("Slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 10000); 
}

//toggle divs
function choice(toggleID){

    var toggleDiv = document.getElementById(toggleID);

    if(toggleDiv.id == 'option1'){
            toggleDiv.style.display = 'block';
    }else{
        var toggleDiv1 = document.getElementById('option1');
        toggleDiv1.style.display = 'none';
    }
    
    if(toggleDiv.id == 'option2'){
            toggleDiv.style.display = 'block';
    }else{
        var toggleDiv2 = document.getElementById('option2');
        toggleDiv2.style.display = 'none';
    }

    if(toggleDiv.id == 'option3'){
            toggleDiv.style.display = 'block';
    }else{
        var toggleDiv3 = document.getElementById('option3');
        toggleDiv3.style.display = 'none';
    }


}

//Slide show number 2

var slideIndex1 = 1;
showSlides(slideIndex1);

function plusSlides(n) {
  showSlides(slideIndex1 += n);
}

function currentSlide(n) {
  showSlides(slideIndex1 = n);
}

function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex1 = 1}    
        if (n < 1) {slideIndex1 = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex1-1].style.display = "block";  
        dots[slideIndex1-1].className += " active";
}

//Toggle navbar when screen size is under 1750 px

function toggleNav() {
  var x = document.getElementById("headerList");
  if (x.className === "header") {
    x.className += " responsive";
  } else {
    x.className = "header";
  }
}