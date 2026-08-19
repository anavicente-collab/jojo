const Carta = document.getElementById("carta");
const BtnCarta = document.getElementById("btn-card");

BtnCarta.addEventListener("click", () => {
  Carta.classList.toggle("virada")
});