import { useTodos } from '@/application/contexts/todo.context'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function TableComponent() {
  const { todos } = useTodos()

  function renderRow() {
    return todos.map((todo) => (
      <TableRow key={todo.id}>
        <TableCell className="font-medium">{todo.userId}</TableCell>
        <TableCell>{todo.title}</TableCell>
        <TableCell>{todo.completed}</TableCell>
      </TableRow>
    ))
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>UserId</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{renderRow()}</TableBody>
      <TableCaption>A list of your recent invoices.</TableCaption>
    </Table>
  )
}
