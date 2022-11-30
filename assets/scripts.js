var modal = document.getElementById("about-modal");

$(".close").on("click", function(event) {
  modal.style.display = "none";
});
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$("#green-btn").on("click", function(event) {
  modal = document.getElementById("about-modal");
  modal.style.display = "flex";

  // if you can scroll in the modal, adjust the styles to accommodate a scrollbar
  if (modal.scrollHeight >= modal.clientHeight) {
    $("#about-modal .close").css("right", "-76vh");

    $("#about-modal .modal-content").css("top", "-1vh");
    $("#about-modal .modal-content").css("left", "8.8vh");
    $("#about-modal .modal-content").css("height", "53vh");
    $("#about-modal .modal-content").css("width", "60vh");
    $("#about-modal .modal-content").css("padding-top", "10vh");
    $("#about-modal .modal-content").css("padding-bottom", "10vh");
    $("#about-modal .modal-content").css("padding-right", "15vh");
  }
});

$("#orange-btn").on("click", function(event) {
  modal = document.getElementById("maya-modal");
  modal.style.display = "flex";

  // if you can scroll in the modal, adjust the styles to accommodate a scrollbar
  if (modal.scrollHeight <= modal.clientHeight) {
    $("#maya-modal .close").css("right", "-76vh");

    $("#maya-modal .modal-content").css("top", "-1vh");
    $("#maya-modal .modal-content").css("left", "8.8vh");
    $("#maya-modal .modal-content").css("height", "53vh");
    $("#maya-modal .modal-content").css("width", "60vh");
    $("#maya-modal .modal-content").css("padding-top", "10vh");
    $("#maya-modal .modal-content").css("padding-bottom", "10vh");
    $("#maya-modal .modal-content").css("padding-right", "15vh");
  }
});

$("#yellow-btn").on("click", function(event) {
  modal = document.getElementById("bannerlord-modal");
  modal.style.display = "flex";

  // if you can scroll in the modal, adjust the styles to accommodate a scrollbar
  if (modal.scrollHeight <= modal.clientHeight) {
    $("#bannerlord-modal .close").css("right", "-76vh");

    $("#bannerlord-modal .modal-content").css("top", "-1vh");
    $("#bannerlord-modal .modal-content").css("left", "8.8vh");
    $("#bannerlord-modal .modal-content").css("height", "53vh");
    $("#bannerlord-modal .modal-content").css("width", "60vh");
    $("#bannerlord-modal .modal-content").css("padding-top", "10vh");
    $("#bannerlord-modal .modal-content").css("padding-bottom", "10vh");
    $("#bannerlord-modal .modal-content").css("padding-right", "15vh");
  }
});

$("#purple-btn").on("click", function(event) {
  modal = document.getElementById("rpg-modal");
  modal.style.display = "flex";
  
  // if you can scroll in the modal, adjust the styles to accommodate a scrollbar
  if (modal.scrollHeight <= modal.clientHeight) {
    $("#rpg-modal .close").css("right", "-76vh");

    $("#rpg-modal .modal-content").css("top", "-1vh");
    $("#rpg-modal .modal-content").css("left", "8.8vh");
    $("#rpg-modal .modal-content").css("height", "53vh");
    $("#rpg-modal .modal-content").css("width", "60vh");
    $("#rpg-modal .modal-content").css("padding-top", "10vh");
    $("#rpg-modal .modal-content").css("padding-bottom", "10vh");
    $("#rpg-modal .modal-content").css("padding-right", "15vh");
  }
});