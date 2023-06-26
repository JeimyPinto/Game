const images = document.querySelectorAll(".player");

for (image of images) {
  image.addEventListener("click", function (evt) {
    var player = evt.target;
    selectPlayer(player);
  });
}

//Selección de jugador
function selectPlayer(player) {
  var images_selected = document.querySelector(".player_selected");
  if (images_selected != null) {
    images_selected.className = "player";
  }
  player.className = "player_selected";
}

//Genera funcionalidad en los botones play y volver
const btn_play = document.querySelector("#btn_play");
btn_play.addEventListener("click", function (evt) {
  const selectedPlayer = document.querySelector(".player_selected");
  if (selectedPlayer) {
    const playerIndex = Array.from(images).indexOf(selectedPlayer);
    const playerAlt = selectedPlayer.getAttribute("alt");
    window.location.replace(`../Pages/figth.html?player=${playerIndex}`);
  } else {
    alert("Selecciona un jugador antes de presionar Play.");
  }
});

const btn_exit = document.querySelector("#btn_exit");
btn_exit.addEventListener("click", function (evt) {
  window.location.replace("../index.html");
});
