"use client" // Directive to specify that this file is a client-side file.

import React, { useState, useEffect } from 'react' // Import React and useState hook.
import TitleInput from './titleInput' // Import TitleInput component.
import PriorityInput from './priorityInput' // Import PriorityInput component.
import EstimatedTimeInput from './estimatedTimeInput' // Import EstimatedTimeInput component.
import DueDateInput from './duedateInput' // Import DueDateInput component.
import AddTaskButton from './addTaskButton' // Import AddTaskButton component.
import GenerateButton from './generateButton' // Import GenerateButton component.

import { makeCalendarObj } from '../../api/calendar/generate-calendar'

export default function TaskInput({ addTask, tasks }) { // TaskInput component; task input form that allows users to enter a title, select a priority, input estimated time, and pick a due date for a task.
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [estimatedTime, setEstimatedTime] = useState(0)
  const [dueDate, setDueDate] = useState(new Date())
  const [data, setData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask({ title, priority, estimatedTime, dueDate })
    setTitle('')
    setPriority('Medium')
    setEstimatedTime(0)
    setDueDate(new Date())
  }

  const generateCalendar = async () => {
    try {
      let tasksList = []
      for (const task of tasks) {
        tasksList.push([task["title"], task["estimatedTime"]])
      }
      console.log(tasksList)
      
      const response = await (await makeCalendarObj(tasksList, [7, 20]) );
      const result = await response.response.text();
      console.log(result)
      setData(result);
    } catch (err) {
        console.log(err.message)
    }
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
        <GenerateButton tasks={tasks} generateCalendar={generateCalendar}/>
      </div>
    </form>
  )
}