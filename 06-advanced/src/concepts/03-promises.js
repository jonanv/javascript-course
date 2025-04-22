import { heroes } from "../data/heroes";

/**
 * @description
 * @param {HTMLDivElement} element 
 */
export const promisesComponent = (element) => {
    
    const id = '5d86371f2343e37870b91ef1';

    findHero(id)
        .then(hero => {
            element.innerHTML = hero.name;
        })
        .catch(error => {
            element.innerHTML = error;
        });
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