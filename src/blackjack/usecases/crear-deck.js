// Esta función crea un nuevo deck
import _ from 'underscore';

/**
 * 
 * @param {Array<string>} TiposDeCarta  Ejemplo:['C','D','H','S'];
 * @param {Array<string>} TiposEspeciales Ejemplo:['A','J','Q','K'];
 * @returns {Array<string>}
 */
export const crearDeck = (TiposDeCarta,TiposEspeciales) => {

  if(!TiposDeCarta || TiposDeCarta.length===0) throw 'TiposDeCarta es obligatorio como un array de string';
  if(!TiposEspeciales || TiposEspeciales.length===0) throw 'TiposEspeciales es obligatorio como un array de string';

  let deck =[];
  for( let i = 2; i <= 10; i++ ) {
      for( let tipo of TiposDeCarta ) {
          deck.push( i + tipo);
      }
  }

  for( let tipo of TiposDeCarta ) {
      for( let esp of TiposEspeciales ) {
          deck.push( esp + tipo);
      }
  }
  // console.log( deck );
  return _.shuffle( deck );;
}

export default crearDeck;