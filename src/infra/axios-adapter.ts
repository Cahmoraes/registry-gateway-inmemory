import axios, { AxiosInstance } from 'axios'

export class AxiosAdapter {
  private readonly api: AxiosInstance

  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL,
    })
  }

  async get<Output = never>(aPath: string): Promise<Output> {
    const result = await this.api.get(aPath)
    return result.data
  }
}
