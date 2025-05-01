import './render-modal.css';
import modalHtml from './render-modal.html?raw';

let modal;
let form;

/**
 * @description Muestra el modal
 */
export const showModal = () => {
    modal?.classList.remove('hide-modal');
};

/**
 * @description Cierra el modal
 */
export const hideModal = () => {
    modal?.classList.add('hide-modal');
    form?.reset();
}

/**
 * @description Renderiza un modal para añadir o editar un usuario
 * @param {HTMLDivElement} element Elemento HTML donde se renderiza el modal
 * @param {(userLike) => Promise<void>} callback Función que se ejecuta al guardar el usuario
 */
export const renderModal = (element, callback) => {

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
    form.addEventListener('submit', async(event) => {
        event.preventDefault();

        const formData = new FormData(form);
        let userLike = {};
        for (const [key, value] of formData.entries()) {
            if (key === 'balance') {
                userLike[key] = +(value);
                continue;
            }

            if (key === 'isActive') {
                userLike[key] = (value === 'on') ? true : false;
                continue;
            }

            userLike[key] = value;
        }

        await callback(userLike);
        hideModal();
    });
}