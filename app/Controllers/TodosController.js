import { appState } from "../AppState.js"
import { todosService } from "../Services/TodosService.js"
import { Pop } from "../Utils/Pop.js"

function _drawTodos() {
    let todos = appState.todos
    let completedTodos = appState.todos.filter(t => t.completed == true)
    const user = appState.user
    // if (user == null) {
    //     document.getElementById('todo-list').innerHTML = `
    //         <p class="m-0 pt-4">Get Motivated!</p>
    //           <p class="m-0 pb-2">Enter a name to create a todo</p>`
    //     return
    // }
    if (todos.length > 0) {
        document.getElementById('todo-form').style.display = "block";
        document.getElementById('todo-count').style.display = "block";
        document.getElementById('completed').innerText = completedTodos.length.toString()
        document.getElementById('total').innerText = todos.length.toString()
        let template = ''
        todos.forEach(t => template += t.Template)
        document.getElementById('todo-list').innerHTML = template
    } else {
        document.getElementById('todo-form').style.display = "none";
        document.getElementById('todo-count').style.display = "none";
        document.getElementById('todo-list').innerHTML = `
            <p class="m-0 pt-4">Get Motivated!</p>
              <p class="m-0 pb-2">Add a todo</p>
              <button onclick="app.todosController.showTodoForm()" class="todo-button" id="todo-button">New
                todo</button>`
    }
}

export class TodosController {
    constructor() {
        console.log('hello from todos controller')
        this.getTodos()
        // ProxyState.on('user', this.getAllTodos)
        // ProxyState.on('user', _drawTodos)
        appState.on('todos', _drawTodos)
    }

    showTodos() {
        console.log('show todos')
        let todos = document.getElementById('todo-row')
        todos.classList.toggle("display-none")
    }

    showTodoForm() {
        console.log('todo form')
        document.getElementById('todo-form').style.display = "block";
        document.getElementById('todo-button').style.display = "none";
    }


    async getTodos() {
        try {
            await todosService.getTodos()
        } catch (error) {
            Pop.error(error)
        }
    }

    createTodo() {
        try {
            window.event.preventDefault()
            const form = window.event.target
            const newTodo = {
                // @ts-ignore
                description: form.description.value
            }
            // console.log(newTodo);
            todosService.createTodo(newTodo)
            // @ts-ignore
            form.reset()
        } catch (error) {
            Pop.error(error)
        }
    }

    async completeTodo(id) {
        try {
            await todosService.completeTodo(id)
        } catch (error) {
            Pop.error(error)
        }
    }

    async deleteTodo(id) {
        try {
            if (await Pop.confirm('Are you sure you want to delete this todo?')) {
                await todosService.deleteTodo(id)
            }
        } catch (error) {
            Pop.error(error)
        }
    }
}