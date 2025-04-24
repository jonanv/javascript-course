import { heroes } from "../data/heroes";

/**
 * @description
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsAsyncComponent = async(element) => {
    
    const heroGenerator = getHeroGenerator();
    let isFinished = false;

    do {
        const { value, done } = await heroGenerator.next();
        isFinished = done;
        if (isFinished) break;
        element.innerHTML += `${ value } <br />`;
    } while (!isFinished); // while (isFinished === false)

}

async function* getHeroGenerator() {
    for (const hero of heroes) {
        await sleep();
        yield hero.name;
    }
}

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 500);
    });
}