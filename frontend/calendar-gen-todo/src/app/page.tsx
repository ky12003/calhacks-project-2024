"use client" // Directive to specify that this file is a client-side file.

import React, { useState } from 'react'
import TaskInput from './taskInput/taskInput'
import TodoListItems from './todoListItems/todoListItems'
import "./styles/styles.css"

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

  // BOILER PLATE FOR GETTING DATA FROM THE API
  // const [data, setData] = useState('');

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await generateTasks('test');
  //       const result = await response.response.text();
  //       setData(result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="todo-list">
      <h1>Tasklist</h1>
      <TaskInput addTask={addTask} />
      <TodoListItems tasks={tasks} removeTask={removeTask} />
    </div>
  )
}