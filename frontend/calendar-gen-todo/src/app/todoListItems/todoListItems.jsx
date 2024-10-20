import TodoListItem from './todoListItem'

export default function TodoListItems({ tasks, removeTask }) {
  return (
    <div className="todo-list-items">
      {tasks.map(task => (
        <TodoListItem key={task.id} task={task} removeTask={removeTask} />
      ))}
    </div>
  )
}