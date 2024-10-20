import { Button } from '@mantine/core'
import { Trash2, Lightbulb } from 'lucide-react'

export default function TodoItemActions({ task, removeTask }) {
  return (
    <div className="todo-item-actions">
      <Button variant="ghost" onClick={() => removeTask(task.id)}>
        <Trash2 className="h-5 w-5" />
      </Button>
      <Button variant="ghost">
        <Lightbulb className="h-5 w-5" />
      </Button>
    </div>
  )
}