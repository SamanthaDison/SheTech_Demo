import { generateId } from "../Utils/generateId.js";

export class Todo {
  constructor(data) {
    this.id = data.id
    this.description = data.description
    this.user = data.user
    this.completed = data.completed
  }

  get Template() {
    return ` <div class="d-flex justify-content-between align-items-center todo-item my-2">
                <i title="Complete task" class=" fs-4 hoverable mdi mdi-checkbox-${this.completed ? 'marked' : 'blank-outline'}"
                  onclick="app.todosController.completeTodo('${this.id}')"></i>
                <p class="px-2 m-0 VT fs-3">${this.description}</p>
          <i title="Remove task" class="fs-4 hoverable mdi mdi-alpha-x-box-outline" onclick="app.todosController.deleteTodo('${this.id}')"></i>
              </div>
        `
  }
}

// this dropdown was replaced with x icon for handling deletes
{/* <div class="dropdown">
  <div class="selectable text-end" data-bs-toggle="dropdown" aria-expanded="false"
    id="todoDropdown" title="todo">
    <span class="todo-menu hoverable">...</span>
  </div>
  <div class="dropdown-menu p-0" aria-labelledby="todoDropdown">
    <div class="hoverable selectable" onclick="app.todosController.deleteTodo('${this.id}')">
      Delete
    </div>
  </div>
</div> */}
