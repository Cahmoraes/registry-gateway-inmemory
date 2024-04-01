export interface TodoCreateProps {
  userId: number
  id: number
  title: string
  completed: boolean
}

export class Todo {
  private _userId: number
  private _id: number
  private _title: string
  private _completed: boolean

  private constructor(props: TodoCreateProps) {
    this._userId = props.userId
    this._id = props.id
    this._title = props.title
    this._completed = props.completed
  }

  public static create(props: TodoCreateProps) {
    return new Todo(props)
  }

  get userId() {
    return this._userId
  }

  get id() {
    return this._id
  }

  get title() {
    return this._title
  }

  get completed(): string {
    return String(this._completed)
  }
}
