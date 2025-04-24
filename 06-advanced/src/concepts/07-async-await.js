/**
 * @description
 * @param {HTMLDivElement} element 
 */
export const asyncAwait2Component = async (element) => {

    console.time('promise');
    
    // const value1 = await slowPromise();
    // const value2 = await midiumPromise();
    // const value3 = await fastPromise();

    const [ value1, value2, value3 ] = await Promise.all([
        slowPromise(),
        midiumPromise(),
        fastPromise()
    ]);

    element.innerHTML = `
        value1: ${ value1 } <br>
        value2: ${ value2 } <br>
        value3: ${ value3 } <br>
    `;

    console.timeEnd('promise');
}

const slowPromise = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve('Slow Promise');
    }, 2000);
});

const midiumPromise = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve('Midium Promise');
    }, 1500);
});

const fastPromise = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve('Fast Promise');
    }, 1000);
});