import { AccordionComponent } from '@/components/accordion'
import { Menu } from '@/components/menu'
import { TableComponent } from '@/components/table'

export function HomePage() {
  return (
    <div className="container mx-auto py-10">
      <Menu />
      <div className="mt-10 space-y-5">
        <AccordionComponent />
        <TableComponent />
      </div>
    </div>
  )
}
