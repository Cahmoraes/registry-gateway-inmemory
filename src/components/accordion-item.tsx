import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

interface AccordionItemComponentProps {
  value: string
  title: string
  content: string
}

export default function AccordionItemComponent({
  value,
  title,
  content,
}: AccordionItemComponentProps) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>{content}</AccordionContent>
    </AccordionItem>
  )
}
