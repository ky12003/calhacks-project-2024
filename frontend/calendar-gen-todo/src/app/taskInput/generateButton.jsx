import { Button } from '@mantine/core' // Import Button component from Mantine.

export default function GenerateButton({tasks, generateCalendar}) { // Renders an outlined button component.
  // <Button variant="ghost" onClick={() => removeTask(task.id)
  return <Button type="button" variant="outline" className="ml-2" onClick={() => generateCalendar(tasks)}>Generate</Button>
}