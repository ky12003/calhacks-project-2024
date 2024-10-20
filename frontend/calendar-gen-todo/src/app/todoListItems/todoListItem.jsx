import TodoItemContents from './todoItemContents'
import TodoItemActions from './todoItemActions'

export default function TodoListItem({ task, removeTask }) {
  return (
    <div className="todo-item">
      <TodoItemContents task={task} />
      <TodoItemActions task={task} removeTask={removeTask} />
    </div>
  )
}