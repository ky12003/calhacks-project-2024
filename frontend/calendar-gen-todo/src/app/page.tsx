"use client"

import React, { useState } from 'react'
import TaskInput from './taskInput/taskInput'
import TodoListItems from './todoListItems/todoListItems'
import "./styles/styles.css"

interface Task {
  id: number
  title: string
  priority: 'Low' | 'Medium' | 'High'
  estimatedTime: number
  dueDate: Date
}

export default function Home() {
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