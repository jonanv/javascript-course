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

    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `${ hero1.name } / ${ hero2.name }`;
    }

    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371fd55e2e2a30fe1ccb';

    // Forma 1
    // findHero(id1, id2)
    //     .then((hero1) => {

    //         findHero(id2)
    //             .then((hero2) => {
    //                 renderTwoHeroes(hero1, hero2);
    //             })
    //             .catch(renderError);
    //     })
    //     .catch(renderError);


    // Forma 2
    // let hero1;

    // findHero(id1)
    //     .then(hero => {
    //         hero1 = hero;
    //         return findHero(id2);
    //     })
    //     .then(hero2 => {
    //         renderTwoHeroes(hero1, hero2)
    //     })
    //     .catch(renderError);

    // Forma 3
    Promise.all([ 
            findHero(id1), 
            findHero(id2) 
        ])
        .then(([ hero1, hero2 ]) => {
            renderTwoHeroes(hero1, hero2);
        })
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