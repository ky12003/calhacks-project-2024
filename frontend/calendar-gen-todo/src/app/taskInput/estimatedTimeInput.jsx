import { Input } from "@mantine/core"

export default function EstimatedTimeInput({ value, onChange }) {
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