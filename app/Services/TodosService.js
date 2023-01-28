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
    async createTodo(newTodo) {
        const res = await sandboxApi.post('api/sam/todos', newTodo)
        let created = new Todo(res.data)
        appState.todos = [created, ...appState.todos]
    }
    async completeTodo(id) {
        const todo = appState.todos.find(t => t.id == id)
        todo.completed = !todo.completed
        const res = await sandboxApi.put(`api/sam/todos/${id}`, todo)
        let todoIndex = appState.todos.findIndex(t => t.id == id)
        appState.todos.splice(todoIndex, 1, new Todo(res.data))
        appState.emit('todos')

    }
    async deleteTodo(id) {
        const res = await sandboxApi.delete(`api/sam/todos/${id}`)
        appState.todos = appState.todos.filter(t => t.id != id)
    }

}

export const todosService = new TodosService()