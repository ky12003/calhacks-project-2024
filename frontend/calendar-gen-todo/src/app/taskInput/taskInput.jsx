"use client" // Directive to specify that this file is a client-side file.

import React, { useState } from 'react' // Import React and useState hook.
import TitleInput from './titleInput' // Import TitleInput component.
import PriorityInput from './priorityInput' // Import PriorityInput component.
import EstimatedTimeInput from './estimatedTimeInput' // Import EstimatedTimeInput component.
import DueDateInput from './duedateInput' // Import DueDateInput component.
import AddTaskButton from './addTaskButton' // Import AddTaskButton component.
import GenerateButton from './generateButton' // Import GenerateButton component.

export default function TaskInput({ addTask }) { // TaskInput component; task input form that allows users to enter a title, select a priority, input estimated time, and pick a due date for a task.
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