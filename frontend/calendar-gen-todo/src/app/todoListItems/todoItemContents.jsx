export default function TodoItemContents({ task }) {
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