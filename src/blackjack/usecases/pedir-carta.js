/**
 *  Esta función sirve para pedir una carta
 * @param {Array<String>} deck 
 * @returns {String} retorna la carta
 */
export const pedirCarta = (deck) => {

    if( !deck || deck.length === 0) 
        throw new Error('No hay cartas en el deck');

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}

export default pedirCarta;