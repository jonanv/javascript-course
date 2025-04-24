import { heroes } from '../data/heroes';
/**
 * @description Obtener heroes de forma asincrona
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {

    // element.innerHTML = 'Loading...';

    // const id = '5d86371f2343e37870b91ef1';
    // const hero = await getHeroAsync(id);

    // if (await getHeroAsync(id)) {
    //     const hero = await getHeroAsync(id);
    //     element.innerHTML = hero.name;
    //     return;
    // }

    // element.innerHTML = 'Hero not found';


    const herosIds = heroes.map(hero => hero.id);

    for await (const hero of getHeroesAsync(herosIds)) {
        if (hero) {
            element.innerHTML += `<br>${ hero.name }`;
            return;
        } else {
            element.innerHTML += `<br>Hero not found`;
        }
    }
}

/**
 * @description Obtener heroes
 * @param {Array<String>} heroIds 
 * @return {Array<Promise<Heroe>>} Arreglo de promesas
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

/**
 * @description Obtener un heroe de forma asincrona
 * @param {String} id Id del heroe a buscar
 * @return {Promise<Heroe>} Heroe encontrado
 */
const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find( hero => hero.id === id );
}