import { ThemeProvider } from '@/components/theme-provider'

import { bootstrap } from './application/bootstrap'
import { TodoContextProvider } from './application/contexts/todo.context'
import { TodoGatewayFactory } from './infra/todo-gateway/todo-gateway-factory'
import { HomePage } from './pages/home'

// Bootstrap
bootstrap()
// Factory
const httpTodoGateway = TodoGatewayFactory.create()
// Composition Root
export function App() {
  return (
    <ThemeProvider>
      <TodoContextProvider todoGateway={httpTodoGateway}>
        <HomePage />
      </TodoContextProvider>
    </ThemeProvider>
  )
}
