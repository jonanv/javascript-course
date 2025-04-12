
export class Todo {

    /**
     * 
     * @param {String} description Descripción de la tarea
     */
    constructor(description) {
        this.id = 1;
        this.description = description;
        this.done = false;
        this.createAt = new Date();
    }
}