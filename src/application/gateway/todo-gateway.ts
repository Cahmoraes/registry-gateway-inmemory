import { Todo } from '../entities/todo.entity'

export interface TodoGateway {
  allTodos(): Promise<Todo[]>
}
