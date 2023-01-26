import { generateId } from "../Utils/generateId.js";

export class Todo {
    constructor(data) {
        this.id = data.id
        this.description = data.description
        this.user = data.user
        this.completed = data.completed
    }

    get Template() {
        return ` <div class="d-flex justify-content-between align-items-baseline todo-item ">
                <i class="hoverable mdi mdi-checkbox-${this.completed ? 'marked' : 'blank-outline'}"
                  onclick="app.todosController.completeTodo('${this.id}')"></i>
                <p class="px-2">${this.description}</p>
                <div class="dropdown">
                  <div class="selectable text-end" data-bs-toggle="dropdown" aria-expanded="false"
                    id="todoDropdown" title="todo">
                    <span class="todo-menu hoverable">...</span>
                  </div>
                  <div class="dropdown-menu p-0" aria-labelledby="todoDropdown">
                    <div class="hoverable selectable" onclick="app.todosController.deleteTodo('${this.id}')">
                      Delete
                    </div>
                  </div>
                </div>
              </div>
        `
    }
}

