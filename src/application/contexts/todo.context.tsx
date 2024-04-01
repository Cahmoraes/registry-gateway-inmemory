import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

import { Todo } from '../entities/todo.entity'
import { TodoGateway } from '../gateway/todo-gateway'

export interface TodoContextData {
  todos: Todo[]
  isLoading: boolean
}

const TodoContext = createContext({} as TodoContextData)

interface TodoContextProviderProps {
  todoGateway: TodoGateway
  children: React.ReactNode
}

interface TodoRefProps {
  todos: Todo[]
}

export function TodoContextProvider({
  children,
  todoGateway,
}: TodoContextProviderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const todoRefProps = useRef<TodoRefProps>({
    todos: [],
  })
  const fetchAndSetTodos = useCallback(async () => {
    try {
      setIsLoading(true)
      const todos = await todoGateway.allTodos()
      todoRefProps.current.todos = todos
      console.log(todos)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [todoGateway])

  useEffect(() => {
    fetchAndSetTodos()
  }, [fetchAndSetTodos])

  return (
    <TodoContext.Provider
      value={{ isLoading, todos: todoRefProps.current.todos }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export function useTodos() {
  const todoContext = useContext(TodoContext)
  return todoContext
}
