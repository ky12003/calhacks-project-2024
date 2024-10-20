import TodoListItem from './todoListItem' // Import TodoListItem component.

export default function TodoListItems({ tasks, removeTask }) { // TodoListItems component renders a list of to-do items.
  return (
    <div className="todo-list-items">
      {tasks.map(task => (
        <TodoListItem key={task.id} task={task} removeTask={removeTask} />
      ))}
    </div>
  )
}