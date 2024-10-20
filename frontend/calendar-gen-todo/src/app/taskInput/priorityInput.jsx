export default function PriorityInput({ value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 priority" />
      <select
        id="priority"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        className="w-full px-3 py-2 border rounded-md"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
  )
}