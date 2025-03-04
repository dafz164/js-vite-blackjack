import {pedirCarta, valorCarta, crearCartaHTML} from './';
/**
 * Esta función sirve para procesar el turno de la computadora
 * @param {Number} puntosMinimos Ejemplo : 10
 * @param {HTMLElement>} puntosHTML Elemento HTML para mostrar los puntos
 * @param {HTMLElement>} divCartasComputadora Elemento HTML para mostrar las cartas de la computadora
 * @param {Array<String>} deck
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {

    if ( !puntosMinimos ) throw new Error('puntosMinimos son necesarios');
    if ( !puntosHTML ) throw new Error('puntosMinimos son necesarios');
    
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

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

export default turnoComputadora;