export class User {

    /**
     * @description Clase que representa un usuario
     * @param {Object<User>} user Objeto de usuario
     */
    constructor({ id, isActive, balance, avatar, firstName, lastName, gender}) {
        this.id = id;
        this.isActive = isActive;
        this.balance = balance;
        this.avatar = avatar;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;    
    }

}