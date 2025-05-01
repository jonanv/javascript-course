import './render-buttons.css';
import userStore from '../../store/user-store';

/**
 * @description Renderiza los botones de la aplicación
 * @param {HTMLDivElement} element Elemento HTML donde se renderiza la aplicación
 */
export const renderButtons = (element) => {
    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next > ';

    const prevButton = document.createElement('button');
    prevButton.innerText = ' < Prev';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerText = userStore.getCurrentPage();

    element.append(prevButton, currentPageLabel, nextButton);
}