import './render-add-button.css';

/**
 * @description Renderiza el botón de añadir usuario
 * @param {HTMLDivElement} element Elemento HTML donde se renderiza el botón de añadir
 */
export const renderAddButton = (element) => {
    const fabButton = document.createElement('button');
    fabButton.innerText = '+';
    fabButton.classList.add('fab-button');

    element.append(fabButton);

    // Event listener for the add button
    fabButton.addEventListener('click', () => {
        throw new Error('Add user functionality not implemented yet!');
    });
}