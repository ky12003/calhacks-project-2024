export default function TodoItemContents({ task }) { // Component to display the contents of a todo item (title, priority, estimated time, due date).
  return (
    <div className="todo-item-content">
      <h3>{task.title}</h3>
      <p>
        Priority: {task.priority} | 
        Estimated Time: {task.estimatedTime} hours | 
        Due: {task.dueDate.toLocaleDateString()}
      </p>
    </div>
  )
}