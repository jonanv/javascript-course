import './render-modal.css';
import modalHtml from './render-modal.html?raw';

let modal;
let form;

/**
 * @description Muestra el modal
 */
export const showModal = () => {
    if (!modal) return;
    modal.classList.remove('hide-modal');
};

/**
 * @description Cierra el modal
 */
export const hideModal = () => {
    if (!modal) return;
    modal.classList.add('hide-modal');
}

/**
 * @description Renderiza un modal para añadir o editar un usuario
 * @param {HTMLDivElement} element Elemento HTML donde se renderiza el modal
 */
export const renderModal = (element) => {

    if (modal) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';

    element.append(modal);

    // Event listener for the close button
    modal.addEventListener('click', (event) => {
        if (event.target.className === 'modal-container') {
            hideModal();
        }
    });

    // Event listener for the save button
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const user = Object.fromEntries(formData.entries());
        console.log(user);
        hideModal();
    });
}