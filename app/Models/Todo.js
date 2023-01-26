import { generateId } from "../Utils/generateId.js";

export class Todo {
    constructor(data) {
        this.id = data.id
        this.description = data.description
        this.user = data.user
        this.completed = data.completed
    }
}