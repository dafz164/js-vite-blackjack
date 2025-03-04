/**
 * Esta función sirve para obtener el valor de la carta
 * @param {String} carta Ejemplo : 3C
 * @returns {Number} retorna el valor de la carat
 */
export const valorCarta = ( carta ) => {

    if(!!carta == false) throw Error('No se ha enviado una carta para obtener el valor');

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}

export default valorCarta;