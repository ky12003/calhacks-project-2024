"use client"

import React, { useState } from 'react'
import TitleInput from './titleInput'
import PriorityInput from './priorityInput'
import EstimatedTimeInput from './estimatedTimeInput'
import DueDateInput from './duedateInput'
import AddTaskButton from './addTaskButton'
import GenerateButton from './generateButton'

export default function TaskInput({ addTask }) {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [estimatedTime, setEstimatedTime] = useState(0)
  const [dueDate, setDueDate] = useState(new Date())

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask({ title, priority, estimatedTime, dueDate })
    setTitle('')
    setPriority('Medium')
    setEstimatedTime(0)
    setDueDate(new Date())
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="todo-form-grid">
        <TitleInput value={title} onChange={setTitle} />
        <PriorityInput value={priority} onChange={setPriority} />
        <EstimatedTimeInput value={estimatedTime} onChange={setEstimatedTime} />
        <DueDateInput value={dueDate} onChange={setDueDate} />
      </div>
      <div className="todo-form-buttons">
        <AddTaskButton />
        <GenerateButton />
      </div>
    </form>
  )
}