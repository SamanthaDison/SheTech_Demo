import { sandboxApi } from "./AxiosService.js"

class TodosService {
    async getTodos() {
        const res = await sandboxApi.get('api/sam/todos')
        console.log(res.data)
    }

}

export const todosService = new TodosService()