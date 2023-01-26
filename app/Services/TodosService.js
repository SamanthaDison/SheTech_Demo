import { appState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { sandboxApi } from "./AxiosService.js"

class TodosService {
    async getTodos() {
        const res = await sandboxApi.get('api/sam/todos')
        // console.log(res.data)
        appState.todos = res.data.map(t => new Todo(t))
        console.log('todos', appState.todos);
    }

}

export const todosService = new TodosService()