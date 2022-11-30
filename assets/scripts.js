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
});

$("#orange-btn").on("click", function(event) {
  modal = document.getElementById("maya-modal");
  modal.style.display = "flex";
});

$("#yellow-btn").on("click", function(event) {
  modal = document.getElementById("bannerlord-modal");
  modal.style.display = "flex";
});

$("#purple-btn").on("click", function(event) {
  modal = document.getElementById("rpg-modal");
  modal.style.display = "flex";
});