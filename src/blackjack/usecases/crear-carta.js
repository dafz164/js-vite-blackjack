
/**
 * Esta funcion sirve para crear la carta
 * @param {String} carta Ejemplo: 3C
 * @returns {HTMLElement} imagen de retorno
 */
export const crearCartaHTML = (carta) => {
    if(!carta) throw new Error('La carta es necesaria');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}

export default crearCartaHTML;