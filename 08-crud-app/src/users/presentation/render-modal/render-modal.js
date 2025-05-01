import './render-modal.css';
import modalHtml from './render-modal.html?raw';

let modal;

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
}