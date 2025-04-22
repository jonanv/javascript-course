import { heroes } from '../data/heroes';

/**
 * @description
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {
    
    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f233c9f2425f16916';
    findHero(id1, (error, hero1) => {
        // element.innerHTML = hero?.name || 'No se ha encontrado el heroe';
        // element.innerHTML = hero?.name || error;

        if (error) {
            element.innerHTML = error;
            return;
        }

        findHero(id2, (error, hero2) => {
            if (error) {
                element.innerHTML = error;
                return;
            }
            element.innerHTML = `${ hero1.name } / ${ hero2.name }`;
        });
    });
}

/**
 * @description Funcion que busca un heroe por su id
 * @param {String} id Id del heroe a buscar
 * @param {(error: String | null, hero: Object) => void} callback Callback que se ejecuta al encontrar el heroe
 */
const findHero = (id, callback) => {
    if (!id) throw new Error('No se ha proporcionado un id');
    if (typeof callback !== 'function') throw new Error('El callback no es una funcion');

    const hero = heroes.find(hero => hero.id === id);

    // if (!heroe) callback(`No se ha encontrado el heroe con el id ${ id }`, null);
    // else callback(null, heroe);

    if (!hero) {
        callback(`No se ha encontrado el heroe con el id ${ id }`, null);
        return;
    }
    callback(null, hero);
}