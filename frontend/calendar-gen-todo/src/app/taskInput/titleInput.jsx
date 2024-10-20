import { Input } from "@mantine/core"

export default function TitleInput({ value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 title" />
      <Input
        id="title"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        className="w-full"
      />
    </div>
  )
}