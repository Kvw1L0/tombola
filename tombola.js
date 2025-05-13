
let disponibles = Array.from({ length: 40 }, (_, i) => i + 1);
const bolaSeleccionada = document.getElementById("bola-seleccionada");
const contenedorSorteadas = document.getElementById("bolas-sorteadas");

function sortearNumero() {
  if (!disponibles.length) return;

  const index = Math.floor(Math.random() * disponibles.length);
  const numero = disponibles.splice(index, 1)[0];

  bolaSeleccionada.textContent = numero;
  bolaSeleccionada.style.display = "flex";

  setTimeout(() => {
    bolaSeleccionada.style.display = "none";

    const bolaFinal = document.createElement("div");
    bolaFinal.className = "bola";
    bolaFinal.textContent = numero;
    bolaFinal.classList.add('aparece');
    contenedorSorteadas.appendChild(bolaFinal);
  }, 1500);
}

document.getElementById("sortear").addEventListener("click", sortearNumero);
