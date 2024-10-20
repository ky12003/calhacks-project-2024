"use client" // Directive to specify that this file is a client-side file.

import React, { useState } from 'react' // Import React and useState from react.
import TaskInput from './taskInput/taskInput' // Import TaskInput from taskInput.tsx.
import TodoListItems from './todoListItems/todoListItems' // Import TodoListItems from todoListItems.tsx.
import "./styles/styles.css" // Import custom styles from styles.css.

interface Task { // Define an interface for Task.
  id: number
  title: string
  priority: 'Low' | 'Medium' | 'High'
  estimatedTime: number
  dueDate: Date
}

export default function Home() { // Define a functional component Home, the main component of the application.
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (taskData: Omit<Task, 'id'>) => {
    const newTask: Task = {
      id: Date.now(),
      ...taskData
    }
    setTasks([...tasks, newTask])
  }

  const removeTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="todo-list">
      <h1>Tasklist</h1>
      <TaskInput addTask={addTask} />
      <TodoListItems tasks={tasks} removeTask={removeTask} />
    </div>
  )
}