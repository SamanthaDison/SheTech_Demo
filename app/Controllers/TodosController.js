import { todosService } from "../Services/TodosService.js"
import { Pop } from "../Utils/Pop.js"

export class TodosController {
    constructor() {
        console.log('hello from todos controller')
        this.getTodos()
    }

    async getTodos() {
        try {
            await todosService.getTodos()
        } catch (error) {
            Pop.error(error)
        }
    }
}