// Asignar la imagen seleccionada al atributo src del elemento con id "player"
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const playerIndex = urlParams.get("player");
    const playerImage = document.getElementById("player");
  
    if (playerIndex) {
      playerImage.src = `../Desing/multimedia/player${playerIndex}.png`;
    }
  });
  