import './render-modal.css';
import modalHtml from './render-modal.html?raw';
import { User } from '../../models/user';
import { getUserById } from '../../use-cases/get-user-by-id';

let modal;
let form;
let loadUser = {};

/**
 * @description Muestra el modal
 * @param {String | Number} id ID del modal
 */
export const showModal = async(id) => {
    modal?.classList.remove('hide-modal');
    loadUser = {};

    if (!id) return;
    const user = await getUserById(id);
    setFormValues(user);
};

/**
 * @description Cierra el modal
 */
export const hideModal = () => {
    modal?.classList.add('hide-modal');
    form?.reset();
}

/**
 * @description Setea los valores del formulario con los datos del usuario
 * @param {User} user 
 */
export const setFormValues = (user) => {
    const { id, isActive, balance, firstName, lastName } = user;

    const form = document.querySelector('form');
    form.querySelector('input[name="firstName"]').value = firstName;
    form.querySelector('input[name="lastName"]').value = lastName;
    form.querySelector('input[name="balance"]').value = balance;
    form.querySelector('input[name="isActive"]').checked = isActive;
    loadUser = user;
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

    // Event listener
    modal.addEventListener('click', (event) => {
        if (event.target.className === 'modal-container') {
            hideModal();
        }
    });

    // Event listener
    const form = document.querySelector('form');
    form.addEventListener('submit', async(event) => {
        event.preventDefault();

        const formData = new FormData(form);
        let userLike = { ...loadUser};
        
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