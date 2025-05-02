/**
 * @description Actualiza un nuevo usuario en la API
 * @param {String|Number} id Id del usuario a eliminar 
 * @return {Promise<Boolean>} 
 */
export const deleteUserById = async(id) => {
    const url = `${ import.meta.env.VITE_BASE_URL }/users/${id}`;
    const response = await fetch(url, {
        method: 'DELETE',
    });

    const deleteUser = await response.json();
    console.log({ deleteUser });
    
    return true;
}