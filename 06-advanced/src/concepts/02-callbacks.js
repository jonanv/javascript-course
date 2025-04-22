import { heroes } from '../data/heroes';

/**
 * @description
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {
    
    const id = '5d86371f25a058e5b1c8a65e';
    findHeroe(id, (heroe) => {
        element.innerHTML = heroe.name;
    });
}

/**
 * @description Funcion que busca un heroe por su id
 * @param {String} id Id del heroe a buscar
 * @param {(hero: Object) => void} callback Callback que se ejecuta al encontrar el heroe
 */
const findHeroe = (id, callback) => {
    const heroe = heroes.find(heroe => heroe.id === id);

    callback(heroe);
}