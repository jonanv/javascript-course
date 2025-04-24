/**
 * @description
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = (element) => {
    
    // const myGenerator  = myFirstGeneratorFunction();

    // console.log(myGenerator.next());    // { value: 'Primer valor', done: false }
    // console.log(myGenerator.next());    // { value: 'Segundo valor', done: false }
    // console.log(myGenerator.next());    // { value: 'Tercer valor', done: false }
    // console.log(myGenerator.next());    // { value: 'Cuarto valor', done: false }
    // console.log(myGenerator.next());    // { value: 'Ya no hya valores', done: true }
    // console.log(myGenerator.next());    // { value: undefined, done: true }

    const idGenerator = idIterator();
    // console.log(idGenerator.next());   // { value: 1, done: false }
    // console.log(idGenerator.next());   // { value: 2, done: false }
    // console.log(idGenerator.next());   // { value: 3, done: false }

    const button = document.createElement('button');
    button.innerText = 'Click me!';
    element.append(button);

    const renderButton = () => {
        const { value } = idGenerator.next();
        button.innerHTML = `Click ${ value }`;
    }

    button.addEventListener('click', renderButton);

}

function* idIterator() {
    let currentId = 0;
    while (true) {
        yield ++currentId;
    }
}

function* myFirstGeneratorFunction() {
    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';

    return 'Ya no hay valores';
    yield 'Quinto valor';
}