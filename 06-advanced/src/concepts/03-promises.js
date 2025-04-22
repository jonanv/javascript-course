import { heroes } from "../data/heroes";

/**
 * @description
 * @param {HTMLDivElement} element 
 */
export const promisesComponent = (element) => {
    
    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }

    const renderError = (error) => {
        element.innerHTML = `
            <h1>Error</h1>
            <p>${ error }</p>
        `;
    }

    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f25a058e5b1c8a65e';

    findHero(id1)
        .then(renderHero)
        .catch(renderError);
}

/**
 * @description Funcion que busca un heroe por su id
 * @param {String} id Id del heroe a buscar
 */
const findHero = (id) => {
    return new Promise((resolve, reject) => {
        if (!id) throw new Error('No se ha proporcionado un id');

        const hero = heroes.find(hero => hero.id === id);
        if (!hero) {
            reject(`No se ha encontrado el heroe con el id ${ id }`);
            return;
        }
        resolve(hero);
    })
}