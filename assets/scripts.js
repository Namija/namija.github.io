var modal = document.getElementById("about-modal");

$(".close").on("click", function(event) {
  modal.style.display = "none";
});
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$("#about-me").on("click", function(event) {
  modal = document.getElementById("about-modal");
  modal.style.display = "flex";

  // if you can scroll in the modal, adjust the styles to accommodate a scrollbar
  if (modal.scrollHeight >= modal.clientHeight) {
    $("#about-modal .close").css("right", "-59vh");

    $("#about-modal .modal-content").css("top", "-1vh");
    $("#about-modal .modal-content").css("left", "5vh");
    $("#about-modal .modal-content").css("height", "55vh");
    $("#about-modal .modal-content").css("width", "60vh");
    $("#about-modal .modal-content").css("padding-top", "10vh");
    $("#about-modal .modal-content").css("padding-bottom", "10vh");
    $("#about-modal .modal-content").css("padding-right", "9vh");
  }
});

$("#green-btn-wrapper").on("click", function(event) {
  modal = document.getElementById("unity-modal");
  modal.style.display = "flex";
  let slideIndex = 1;
  showSlides(slideIndex, "unity");

  // if you can scroll in the modal, adjust the styles to accommodate a scrollbar
  if (modal.scrollHeight >= modal.clientHeight) {
    $("#unity-modal .close").css("right", "-59vh");

    $("#unity-modal .modal-content").css("top", "-1vh");
    $("#unity-modal .modal-content").css("left", "5vh");
    $("#unity-modal .modal-content").css("height", "55vh");
    $("#unity-modal .modal-content").css("width", "60vh");
    $("#unity-modal .modal-content").css("padding-top", "10vh");
    $("#unity-modal .modal-content").css("padding-bottom", "10vh");
    $("#unity-modal .modal-content").css("padding-right", "9vh");
  }
});

$("#orange-btn-wrapper").on("click", function(event) {
  modal = document.getElementById("maya-modal");
  modal.style.display = "flex";
  let slideIndex = 1;
  showSlides(slideIndex, "maya");

  // if you can scroll in the modal, adjust the styles to accommodate a scrollbar
  if (modal.scrollHeight <= modal.clientHeight) {
    $("#maya-modal .close").css("right", "-59vh");

    $("#maya-modal .modal-content").css("top", "-1vh");
    $("#maya-modal .modal-content").css("left", "5vh");
    $("#maya-modal .modal-content").css("height", "55vh");
    $("#maya-modal .modal-content").css("width", "60vh");
    $("#maya-modal .modal-content").css("padding-top", "10vh");
    $("#maya-modal .modal-content").css("padding-bottom", "10vh");
    $("#maya-modal .modal-content").css("padding-right", "9vh");
  }
});

$("#brown-btn-wrapper").on("click", function(event) {
  modal = document.getElementById("bannerlord-modal");
  modal.style.display = "flex";
  let slideIndex = 1;
  showSlides(slideIndex, "bl");

  // if you can scroll in the modal, adjust the styles to accommodate a scrollbar
  if (modal.scrollHeight <= modal.clientHeight) {
    $("#bannerlord-modal .close").css("right", "-59vh");

    $("#bannerlord-modal .modal-content").css("top", "-1vh");
    $("#bannerlord-modal .modal-content").css("left", "5vh");
    $("#bannerlord-modal .modal-content").css("height", "55vh");
    $("#bannerlord-modal .modal-content").css("width", "60vh");
    $("#bannerlord-modal .modal-content").css("padding-top", "10vh");
    $("#bannerlord-modal .modal-content").css("padding-bottom", "10vh");
    $("#bannerlord-modal .modal-content").css("padding-right", "9vh");
  }
});

$("#purple-btn-wrapper").on("click", function(event) {
  modal = document.getElementById("rpg-modal");
  modal.style.display = "flex";
  let slideIndex = 1;
  showSlides(slideIndex, "rpg");
  
  // if you can scroll in the modal, adjust the styles to accommodate a scrollbar
  if (modal.scrollHeight <= modal.clientHeight) {
    $("#rpg-modal .close").css("right", "-59vh");

    $("#rpg-modal .modal-content").css("top", "-1vh");
    $("#rpg-modal .modal-content").css("left", "5vh");
    $("#rpg-modal .modal-content").css("height", "55vh");
    $("#rpg-modal .modal-content").css("width", "60vh");
    $("#rpg-modal .modal-content").css("padding-top", "10vh");
    $("#rpg-modal .modal-content").css("padding-bottom", "10vh");
    $("#rpg-modal .modal-content").css("padding-right", "9vh");
  }
});


// modal slideshow js
let slideIndex = 1;

function plusSlides(n, modal_name) {
  showSlides(slideIndex += n, modal_name);
}

function currentSlide(n, modal_name) {
  showSlides(slideIndex = n, modal_name);
}

function showSlides(n, modal_name) {
  let i;
  let slides = document.getElementsByClassName("slide-" + modal_name);
  let dots = document.getElementsByClassName("dot-" + modal_name);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// fullscreen imgs on click
const imgs = document.querySelectorAll('.modal-img, .modal-img-wide');
const fullPage = document.querySelector('#fullPage');
const closeBtn = document.querySelector('#closeBtn');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';
    closeBtn.style.display = 'block';
    document.body.style.overflowX = 'hidden';
  });
});

function minimizeImg() {
  fullPage.style.display = 'none';
  closeBtn.style.display = 'none';
  document.body.style.overflowX = 'auto';
}