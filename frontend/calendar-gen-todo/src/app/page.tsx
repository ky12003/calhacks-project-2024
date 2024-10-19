"use client"

import React, { useState } from 'react'
import { Trash2, Lightbulb } from 'lucide-react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import "./styles/styles.css"
import Link from 'next/link';


import { Button } from '@mantine/core';
import { Input } from "@mantine/core"
// import { Label } from "@mantine/core"

interface Task {
  id: number
  title: string
  priority: 'Low' | 'Medium' | 'High'
  estimatedTime: number
  dueDate: Date
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState<Task['priority']>('Medium')
  const [estimatedTime, setEstimatedTime] = useState(0)
  const [dueDate, setDueDate] = useState(new Date())

  const addTask = (e: React.FormEvent) => {
    e.preventDefault()
    const newTask: Task = {
      id: Date.now(),
      title,
      priority,
      estimatedTime,
      dueDate
    }
    setTasks([...tasks, newTask])
    setTitle('')
    setPriority('Medium')
    setEstimatedTime(0)
    setDueDate(new Date())
  }

  const removeTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      
      <form onSubmit={addTask} className="todo-form">
        <div className="todo-form-grid">
          <div>
            <label
              className={`block text-sm font-medium text-gray-700 title`}
            />
            <Input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full"
            />
          </div>
          
          <div>
            <label
              className={`block text-sm font-medium text-gray-700 priority`}
            />
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value as Task['priority'])}
              required
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          
          <div>
            <label
              className={`block text-sm font-medium text-gray-700 estimatedTime`}
            />
            <Input
              id="estimatedTime"
              type="number"
              value={estimatedTime}
              onChange={(e) => setEstimatedTime(Number(e.target.value))}
              required
              min="0"
              step="0.5"
              className="w-full"
            />
          </div>
          
          <div>
            <label
              className={`block text-sm font-medium text-gray-700 dueDate`}
            />
            <DatePicker
              id="dueDate"
              selected={dueDate}
              // onChange={(date: Date) => setDueDate(date)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
        
        <div className="todo-form-buttons">
          <Button type="submit">Add Task</Button>
          <Button type="button" variant="outline" className="ml-2">Generate</Button>
        </div>
      </form>
      
      <div className="todo-list-items">
        {tasks.map(task => (
          <div key={task.id} className="todo-item">
            <div className="todo-item-content">
              <h3>{task.title}</h3>
              <p>
                Priority: {task.priority} | 
                Estimated Time: {task.estimatedTime} hours | 
                Due: {task.dueDate.toLocaleDateString()}
              </p>
            </div>
            <div className="todo-item-actions">
              <Button variant="ghost" onClick={() => removeTask(task.id)}>
                <Trash2 className="h-5 w-5" />
              </Button>
              <Button variant="ghost">
                <Lightbulb className="h-5 w-5" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
