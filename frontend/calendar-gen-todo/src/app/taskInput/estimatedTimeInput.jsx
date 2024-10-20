import { Input } from "@mantine/core" // Import Input component from Mantine.

export default function EstimatedTimeInput({ value, onChange }) { // Create EstimatedTimeInput component; input field for estimated times.
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 estimatedTime" />
      <Input
        id="estimatedTime"
        type="number"
        value={value || ''}
        onChange={(e) => onChange(Number(e.target.value))}
        required
        min="0"
        step="0.5"
        className="w-full"
      />
    </div>
  )
}