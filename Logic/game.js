document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get("name");
  const nickNameLabel = document.querySelector("#nickName");

  // Asignar el valor del nombre al elemento con id "nickName"
  nickNameLabel.textContent = name;
});


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
    window.location.replace(`../Pages/figth.html?player=${playerIndex+1}`);
  } else {
    alert("Selecciona un jugador antes de presionar Play.");
  }
});

const btn_exit = document.querySelector("#btn_exit");
btn_exit.addEventListener("click", function (evt) {
  window.location.replace("../index.html");
});


