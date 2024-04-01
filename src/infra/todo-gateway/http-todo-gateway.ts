import { AxiosError } from 'axios'

import { Todo } from '@/application/entities/todo.entity'
import { TodoGateway } from '@/application/gateway/todo-gateway'

import { AxiosAdapter } from '../axios-adapter'

interface TodoDTO {
  userId: number
  id: number
  title: string
  completed: boolean
}

export class HttpTodoGateway implements TodoGateway {
  constructor(private readonly axiosAdapter: AxiosAdapter) {}

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
    const todosResponse =
      await this.axiosAdapter.get<TodoDTO[]>('/todos?_limit=20')
    return this.createTodos(todosResponse)
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
