document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const playerIndex = urlParams.get("player");
  const playerImage = document.getElementById("player");
  const ataquesContainer = document.getElementById("ataques-container");
  const defensasContainer = document.getElementById("defensas-container");
  const ataqueImages = document.querySelectorAll("#ataques-container img");
  const defensaImages = document.querySelectorAll("#defensas-container img");
  const consoleTextArea = document.getElementById("console");

  if (playerIndex) {
    playerImage.src = `../Desing/multimedia/player${playerIndex}.png`;
  }

  const player = new Player();
  const maquina = new Player();

  // Lógica para inicializar el turno al cargar la página
  const turno = Math.floor(Math.random() * 2) === 0; // true o false
  if (turno) {
    player.turno = true;
    consoleTextArea.value = "¡Es tu turno!\n";
    showAtaqueContainer();
  } else {
    maquina.turno = true;
    consoleTextArea.value = "Turno de tu oponente\n";
    toggleDefensasContainer();
  }

  // Función para mostrar u ocultar el contenedor de ataques 
  function showAtaqueContainer() {
    ataquesContainer.style.display = "block";
    defensasContainer.style.display = "none";
  }

  // Función para mostrar u ocultar el contenedor de defensas
  function toggleDefensasContainer() {
    ataquesContainer.style.display = "none";
    defensasContainer.style.display = "block";
  }

  // Agregar un evento de clic a cada imagen de ataque
  for (let i = 0; i < ataqueImages.length; i++) {
    ataqueImages[i].addEventListener("click", function () {
      const numeroAtaque = i + 1;
      const numeroDefensaMaquina = Math.floor(Math.random() * 3) + 1; // Generar defensa aleatoria para la máquina (1, 2 o 3)

      if (player.turno) {
        const puntosDeVida = player.evaluarAtaque(numeroAtaque, numeroDefensaMaquina);
        consoleTextArea.value += `Has escogido ataque #${numeroAtaque} y tu oponente se ha defendido con defensa #${numeroDefensaMaquina}\n`;
        consoleTextArea.value += `Has perdido ${puntosDeVida} puntos de vida\n`;

        player.score -= puntosDeVida;
      }

      // Lógica para cambiar el turno entre jugador y máquina
      if (player.turno) {
        player.turno = false;
        maquina.turno = true;
        consoleTextArea.value += "Turno de tu oponente\n";
        toggleDefensasContainer();
      } else {
        player.turno = true;
        maquina.turno = false;
        consoleTextArea.value += "¡Es tu turno!\n";
        showAtaqueContainer();
      }
    });
  }


  // Agregar un evento de clic a cada imagen de defensa
  // Procedimiento de evento click para las imágenes de defensa
  for (let i = 0; i < defensaImages.length; i++) {
    defensaImages[i].addEventListener("click", function () {
      const numeroDefensa = i + 1;
      const numeroAtaqueMaquina = Math.floor(Math.random() * 3) + 1; // Generar ataque aleatorio para la máquina (1, 2 o 3)

      if (player.turno) {
        const puntosDeVida = player.evaluarDefensa(numeroDefensa, numeroAtaqueMaquina);

        player.score -= puntosDeVida; // Restar puntosDeVida del score del jugador (player.score)

        // Lógica para cambiar el turno entre jugador y máquina
        if (player.turno) {
          player.turno = false;
          maquina.turno = true;
          consoleTextArea.value += "Turno de tu oponente\n";
          toggleDefensasContainer();
        } else {
          player.turno = true;
          maquina.turno = false;
          consoleTextArea.value += "¡Es tu turno!\n";
          showAtaqueContainer();
        }

        // Actualizar el área de texto (consoleTextArea) con los mensajes correspondientes
        consoleTextArea.value += `Has escogido defensa #${numeroDefensa} y tu oponente ha atacado con ataque #${numeroAtaqueMaquina}\n`;
        consoleTextArea.value += `Tu oponente ha perdido ${-puntosDeVida} puntos de vida\n`;
      }
    });
  }


});

class Player {
  constructor() {
    this.score = 100;
    this.turno = false;
    this.poder = "";
  }

  evaluarDefensa(defensa, ataqueMaquina) {
    const ataque = parseInt(ataqueMaquina);
    const defensaEscogida = parseInt(defensa);

    let puntosDeVida = 0;

    if (ataque === 1 && defensaEscogida === 1) {
      puntosDeVida = -10;
    } else if (ataque === 1 && defensaEscogida === 2) {
      puntosDeVida = -20;
    } else if (ataque === 1 && defensaEscogida === 3) {
      puntosDeVida = 0;
    } else if (ataque === 2 && defensaEscogida === 1) {
      puntosDeVida = 0;
    } else if (ataque === 2 && defensaEscogida === 2) {
      puntosDeVida = -10;
    } else if (ataque === 2 && defensaEscogida === 3) {
      puntosDeVida = -20;
    } else if (ataque === 3 && defensaEscogida === 1) {
      puntosDeVida = -20;
    } else if (ataque === 3 && defensaEscogida === 2) {
      puntosDeVida = 0;
    } else if (ataque === 3 && defensaEscogida === 3) {
      puntosDeVida = -10;
    }

    return puntosDeVida;
  }

  evaluarAtaque(defensa, ataque) {
    if (ataque === 1) {
      if (defensa === 1) return 10;
      if (defensa === 2) return 20;
    }
    if (ataque === 2) {
      if (defensa === 1) return 0;
      if (defensa === 2) return 10;
      if (defensa === 3) return 20;
    }
    if (ataque === 3) {
      if (defensa === 1) return 20;
      if (defensa === 2) return 0;
      if (defensa === 3) return 10;
    }

    return 0;
  }
}
