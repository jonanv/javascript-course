import { renderTable } from "./presentation/render-table/render-table";
import userStore from "./store/user-store";

/**
 * @description Carga los usuarios de una página específica
 * @param {HTMLDivElement} element Elemento HTML donde se renderiza la aplicación
 */
export const UsersApp = async(element) => {

    element.innerHTML = 'Loading...';
    await userStore.loadNextPage();
    element.innerHTML = '';

    renderTable(element);

}