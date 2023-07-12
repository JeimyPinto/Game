document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const playerIndex = urlParams.get("player");
  const playerImage = document.getElementById("player");
  const ataquesContainer = document.getElementById("ataques-container");
  const defensasContainer = document.getElementById("defensas-container");
  const ataqueImages = document.querySelectorAll("#ataques-container img");
  const defensaImages = document.querySelectorAll("#defensas-container img");
  const consoleTextArea = document.getElementById("console");
  const score_player = document.getElementById("score_player");
  const score_counter = document.getElementById("score_counter");
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
      // Generar defensa aleatoria para la máquina (1, 2 o 3)
      const numeroDefensaMaquina = Math.floor(Math.random() * 3) + 1;
      player.poder = numeroAtaque;
      let puntosDeVida = player.atacar(numeroDefensaMaquina);
      // Actualizar el área de texto (consoleTextArea) con los mensajes correspondientes
      consoleTextArea.value = "Has escogido ataque " + numeroAtaque + " y tu oponente se ha defendido con defensa " + numeroDefensaMaquina + "\n";
      consoleTextArea.value += `Tu oponente ha perdido ${puntosDeVida} puntos de vida\n`;

      maquina.score -= puntosDeVida;
      score_counter.innerHTML = maquina.score;

      //Evaluar si un jugador pierde
      if (player.score <= 0 || maquina.score <= 0) {
        if (player.score > maquina.score) {
          alert("Partida terminada, Ganaste");
          window.location.replace("../index.html");

        } else {
          alert("Partida terminada, Ganaste");
          window.location.replace("../index.html");

        }
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
  for (let i = 0; i < defensaImages.length; i++) {
    defensaImages[i].addEventListener("click", function () {
      const numeroDefensa = i + 1;
      // Generar ataque aleatorio para la máquina (1, 2 o 3)
      const numeroAtaqueMaquina = Math.floor(Math.random() * 3) + 1;
      maquina.poder = numeroAtaqueMaquina;
      let puntosDeVida = maquina.atacar(numeroDefensa);
      player.score -= puntosDeVida;
      score_player.innerHTML = player.score;

      // Actualizar el área de texto (consoleTextArea) con los mensajes correspondientes
      consoleTextArea.value = "Has escogido defensa " + numeroDefensa + " y tu oponente ha atacado con ataque " + numeroAtaqueMaquina + "\n";
      consoleTextArea.value += `Has perdido ${puntosDeVida} puntos de vida\n`;

      //Evaluar si un jugador pierde
      if (player.score <= 0 || maquina.score <= 0) {
        if (player.score > maquina.score) {
          alert("Partida terminada, Ganaste");
          window.location.replace("../index.html");
        } else {
          alert("Partida terminada, Ganaste");
          window.location.replace("../index.html");

        }
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

});


class Player {
  constructor() {
    this.score = 100;
    this.turno = false;
    this.poder = "";
  }


  atacar(defensa) {
    if (defensa === 1) {
      if (this.poder === 1) return 10;
      if (this.poder === 2) return 0;
      if (this.poder === 3) return 20;
    }
    if (defensa === 2) {
      if (this.poder === 1) return 20;
      if (this.poder === 2) return 10;
      if (this.poder === 3) return 0;
    }
    if (defensa === 3) {
      if (this.poder === 1) return 0;
      if (this.poder === 2) return 20;
      if (thispoder === 3) return 10;
    }

    return 0;
  }
}
