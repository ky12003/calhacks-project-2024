import { Button } from '@mantine/core' // Import Button component from Mantine.
import { Trash2, Lightbulb } from 'lucide-react' // Import Trash2 and Lightbulb icons from Lucide.

// TODO: add createSubtasks function as parameter
// TODO: add subtask toggle button (to show/not show them)
// TODO: add toggleSubtask function as parameter
export default function TodoItemActions({ task, removeTask }) { // TodoItemActions component renders action buttons for a to-do item (removal button & lightbulb icon button).
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