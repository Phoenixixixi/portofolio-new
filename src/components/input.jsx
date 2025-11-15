import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function InputForm({ forText, text, height, value, onChange }) {
  return (
    <div className="grid w-full items-center gap-3">
      <Label htmlFor={text}>{text}</Label>
      <Input
        type={forText}
        id={text}
        placeholder={text}
        className={`text-white rounded-sm w-full border-white/20 ${height} `}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
