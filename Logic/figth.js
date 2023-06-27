document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const playerIndex = urlParams.get("player");
  const playerImage = document.getElementById("player");
  const consoleTextArea = document.getElementById("console");
  const ataquesContainer = document.getElementById("ataques-container");
  const ataqueImages = ataquesContainer.getElementsByTagName("img");

  if (playerIndex) {
    playerImage.src = `../Desing/multimedia/player${playerIndex}.png`;
  }

  const player = new Player();
  const maquina = new Player();
  const turno = Math.floor(Math.random() * 2) + 1;

  if (turno === 1) {
    player.turno = true;
    consoleTextArea.value = "¡Tu turno!";
    showAtaqueContainer();
  } else {
    maquina.turno = true;
    consoleTextArea.value = "Turno de tu oponente";
    hideAtaqueContainer();
  }
  // Agregar un evento de clic a cada imagen de ataque
  for (let i = 0; i < ataqueImages.length; i++) {
    ataqueImages[i].addEventListener("click", function () {
      // Obtener el poder correspondiente al índice de la imagen de ataque
      const poder = i + 1;

      // Asignar el poder al objeto "player"
      player.poder = poder;

      // Agregar el mensaje al texto existente en el textarea
      consoleTextArea.value += `\nSe ha seleccionado el ataque ${poder}.`;
    });
  }
});

// Función para mostrar el contenedor de ataques y las imágenes
function showAtaqueContainer() {
  const ataqueContainer = document.getElementById("ataques-container");
  ataqueContainer.style.display = "block";
  const ataqueImages = ataqueContainer.querySelectorAll(".ataque-img");
  ataqueImages.forEach((img) => {
    img.style.display = "inline-block";
  });
}

// Función para ocultar el contenedor de ataques y las imágenes
function hideAtaqueContainer() {
  const ataqueContainer = document.getElementById("ataques-container");
  ataqueContainer.style.display = "none";
  const ataqueImages = ataqueContainer.querySelectorAll(".ataque-img");
  ataqueImages.forEach((img) => {
    img.style.display = "none";
  });
}


//Logica del Juego
class Player {
  constructor() {
    this.score = 100;
    this.turno = false;
    this.poder = '';
  }

  atacar(opcion) {
    // Lógica para el ataque según la opción seleccionada
    // Actualizar el score y realizar otras acciones necesarias
  }

  defender(opcion) {
    // Lógica para la defensa según la opción seleccionada
    // Actualizar el score y realizar otras acciones necesarias
  }
}


