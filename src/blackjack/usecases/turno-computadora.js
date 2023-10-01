
import {pedirCarta} from './pedir-carta';
import {valorCarta} from './valor-carta';
import {CrearCartahtml} from './crear-carta-html';
/**
 * 
 * @param {Number} puntosMinimos 
 * @param {Array<String>} deck 
 */

export const turnoComputadora = ( puntosMinimos,PuntosHTML,divCartasComputadora, deck=[] ) => {

  let puntosComputadora =0;

  if (!puntosMinimos)  throw 'puntosMinimos es necesario';
  if (!deck || deck.length==0)  throw 'deck es necesario como un array';
  if (!PuntosHTML )  throw 'PuntosHTML es necesario';

  do {
      const carta = pedirCarta(deck);

      puntosComputadora = puntosComputadora + valorCarta( carta );
      PuntosHTML.innerText = puntosComputadora;
      
      // <img class="carta" src="assets/cartas/2C.png">
      // const imgCarta = document.createElement('img');
      // imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
      // imgCarta.classList.add('carta');
      // divCartasComputadora.append( imgCarta );

      CrearCartahtml(carta,divCartasComputadora);

      if( puntosMinimos > 21 ) {
          break;
      }

  } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

  setTimeout(() => {
      if( puntosComputadora === puntosMinimos ) {
          alert('Nadie gana :(');
      } else if ( puntosMinimos > 21 ) {
          alert('Computadora gana')
      } else if( puntosComputadora > 21 ) {
          alert('Jugador Gana');
      } else {
          alert('Computadora Gana')
      }
  }, 100 );
}