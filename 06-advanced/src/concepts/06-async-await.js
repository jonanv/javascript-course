import { heroes } from "../data/heroes";

/**
 * @description
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async (element) => {
    
    const id1 = '5d86371f233c9f2425f16916';
    const id2 = '5d86371f25a058e5b1c8a65e';
    
    const { name: name1 } = await findHero(id1);
    const { name: name2 } = await findHero(id2);

    element.innerHTML = `${ name1 } / ${ name2 }`;

}


/**
 * @description Busca un héroe por su id
 * @param {String} id id del héroe
 * @return {Promise<Hero>} retorna un héroe
 */
const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);
    if (!hero)
        throw new Error(`Hero with id ${id} not found`);
    return hero;
}