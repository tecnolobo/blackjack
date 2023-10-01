export const CrearCartahtml= (carta,divPonerCarta) =>{
  // <img class="carta" src="assets/cartas/2C.png">
  const imgCarta = document.createElement('img');
  imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
  imgCarta.classList.add('carta');
  divPonerCarta.append( imgCarta );
}