import { heroes } from '../data/heroes';

/**
 * @description
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {
    
    const id = '5d86371f25a058e5b1c8a65e';
    findHeroe(id, (error, heroe) => {
        // element.innerHTML = heroe?.name || 'No se ha encontrado el heroe';
        // element.innerHTML = heroe?.name || error;

        if (error) {
            element.innerHTML = error;
            return;
        }
        element.innerHTML = heroe.name;
    });
}

/**
 * @description Funcion que busca un heroe por su id
 * @param {String} id Id del heroe a buscar
 * @param {(error: String | null, hero: Object) => void} callback Callback que se ejecuta al encontrar el heroe
 */
const findHeroe = (id, callback) => {
    if (!id) throw new Error('No se ha proporcionado un id');
    if (typeof callback !== 'function') throw new Error('El callback no es una funcion');

    const heroe = heroes.find(heroe => heroe.id === id);

    // if (!heroe) callback(`No se ha encontrado el heroe con el id ${ id }`, null);
    // else callback(null, heroe);

    if (!heroe) {
        callback(`No se ha encontrado el heroe con el id ${ id }`, null);
        return;
    }
    callback(null, heroe);
}