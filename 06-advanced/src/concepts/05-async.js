import { heroes } from "../data/heroes";

/**
 * @description
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = (element) => {
    
    const id1 = '5d86371fd55e2e2a30fe1cc3';

    findHero(id1)
        .then((hero) => element.innerHTML = hero)
        .catch((error) => element.innerHTML = error);
}

/**
 * @description Busca un heroe por id
 * @param {String} id id del heroe
 * @return {Promise<String>} Promise que resuelve el heroe
 */
const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);
    return hero.name;
}