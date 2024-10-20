import TodoItemContents from './todoItemContents' // Import the TodoItemContents component.
import TodoItemActions from './todoItemActions' // Import the TodoItemActions component.

export default function TodoListItem({ task, removeTask }) { // TodoListItem component renders a to-do-list item with its contents & action buttons.
  return (
    <div className="todo-item">
      <TodoItemContents task={task} />
      <TodoItemActions task={task} removeTask={removeTask} />
    </div>
  )
}