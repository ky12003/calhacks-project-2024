import DatePicker from 'react-datepicker' // Import DatePicker component.
import "react-datepicker/dist/react-datepicker.css" // Import CSS for DatePicker component.

export default function DueDateInput({ value, onChange }) { // DueDateInput component that renders a styled data picker input field with a label.
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dueDate" />
      <DatePicker
        id="dueDate"
        selected={value}
        onChange={(date) => onChange(date ?? new Date())}
        className="w-full px-3 py-2 border rounded-md"
      />
    </div>
  )
}