import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default function DueDateInput({ value, onChange }) {
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