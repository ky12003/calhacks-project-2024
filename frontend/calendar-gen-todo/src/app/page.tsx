"use client"

import React, { useState } from 'react'
import { Trash2, Lightbulb } from 'lucide-react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import "./styles/styles.css"
import Link from 'next/link'

import { Button } from '@mantine/core'
import { Input } from "@mantine/core"

interface Task {
  id: number
  title: string
  priority: 'Low' | 'Medium' | 'High'
  estimatedTime: number
  dueDate: Date
  subtasks: Subtask[]
  showSubtasks: boolean
}

interface Subtask {
  id: number
  title: string
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
      dueDate,
      subtasks: [],
      showSubtasks: false
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

  const toggleSubtasks = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, showSubtasks: !task.showSubtasks } : task
    ))
  }

  const generateSubtasks = async (taskId: number) => {
    const task = tasks.find(t => t.id === taskId)
    if (!task) return

    // Simulate AI-generated subtasks (replace with actual API call if you have one)
    const generatedSubtasks = [
      `Start ${task.title}`,
      `Continue ${task.title}`,
      `Finish ${task.title}`
    ]

    setTasks(tasks.map(t => {
      if (t.id === taskId) {
        const newSubtasks = generatedSubtasks.map((title, index) => ({
          id: Date.now() + index,
          title
        }))
        return { ...t, subtasks: [...t.subtasks, ...newSubtasks], showSubtasks: true }
      }
      return t
    }))
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
              onChange={(date: Date) => setDueDate(date)}
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
              <Button variant="ghost" onClick={() => generateSubtasks(task.id)}>
                <Lightbulb className="h-5 w-5" />
              </Button>
              {task.subtasks.length > 0 && (
                <Button 
                  variant="ghost" 
                  onClick={() => toggleSubtasks(task.id)}
                >
                  {task.showSubtasks ? "▲" : "▼"}
                </Button>
              )}
            </div>
            {task.showSubtasks && task.subtasks.length > 0 && (
              <div className="subtasks-list ml-6 mt-2">
                {task.subtasks.map(subtask => (
                  <div key={subtask.id} className="subtask-item">
                    {subtask.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}