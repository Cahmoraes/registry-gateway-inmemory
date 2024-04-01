import { AxiosError } from 'axios'

import { Todo } from '@/application/entities/todo.entity'
import { TodoGateway } from '@/application/gateway/todo-gateway'
import todosJson from '@/database/todos.json'

interface TodoDTO {
  userId: number
  id: number
  title: string
  completed: boolean
}

export class InMemoryTodoGateway implements TodoGateway {
  public async allTodos(): Promise<Todo[]> {
    try {
      return this.performAllTodos()
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message)
      }
      throw error
    }
  }

  private async performAllTodos() {
    return this.createTodos(todosJson)
  }

  private createTodos(todosResponse: TodoDTO[]): Todo[] {
    return todosResponse.map(this.createTodo)
  }

  private createTodo(todoResponse: TodoDTO): Todo {
    return Todo.create({
      id: todoResponse.id,
      userId: todoResponse.userId,
      completed: todoResponse.completed,
      title: todoResponse.title,
    })
  }
}
