import { Registry } from '@/application/registry/registry'
import { Accordion } from '@/components/ui/accordion'

import AccordionItemComponent from './accordion-item'

export function AccordionComponent() {
  const registry = Registry.get('Registry')
  const DIP = Registry.get('DIP')
  const Builder = Registry.get('Builder')

  return (
    <Accordion type="single" collapsible>
      <AccordionItemComponent
        value={registry.title}
        title={registry.title}
        content={registry.description}
      />
      <AccordionItemComponent
        value={DIP.title}
        title={DIP.title}
        content={DIP.description}
      />
      <AccordionItemComponent
        value={Builder.title}
        title={Builder.title}
        content={Builder.description}
      />
    </Accordion>
  )
}
