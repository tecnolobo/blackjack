/**
 * 
 * @param {Array<String>} deck 
 * @returns {Array<String>}
 */
// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {

  if ( deck.length === 0 ) {
      throw 'No hay cartas en el deck';
  }
  const carta = deck.pop();
  return carta;
}

export default pedirCarta;