import userStore from "./store/user-store";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderTable } from "./presentation/render-table/render-table";
import { renderAddButton } from "./presentation/render-add-button/render-add-button";

/**
 * @description Carga los usuarios de una página específica
 * @param {HTMLDivElement} element Elemento HTML donde se renderiza la aplicación
 */
export const UsersApp = async(element) => {

    element.innerHTML = 'Loading...';
    await userStore.loadNextPage();
    element.innerHTML = '';

    renderTable(element);
    renderButtons(element);
    renderAddButton(element);
}