import { AxiosAdapter } from '../axios-adapter'
import { env } from '../env'
import { HttpTodoGateway } from './http-todo-gateway'
import { InMemoryTodoGateway } from './in-memory-todo-gateway'

// Simple Factory
export class TodoGatewayFactory {
  // Factory
  public static create() {
    const axiosAdapter = new AxiosAdapter(env.VITE_BASE_URL)
    return this.createByMode(axiosAdapter)
  }

  // Strategy
  private static createByMode(axiosAdapter: AxiosAdapter) {
    // Type Code => Código de tipo
    switch (env.MODE) {
      case 'development':
        return new InMemoryTodoGateway()
      case 'staging':
        return new HttpTodoGateway(axiosAdapter)
      default:
        throw new Error('Invalid environment variables')
    }
  }
}
