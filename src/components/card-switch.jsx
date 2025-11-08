import { ChartSpline } from 'lucide-react'
export default function CardSwitch({ data }) {
  return (
    <div>
      <p className="text-sm font-light">{data.desc}</p>
      <div className="flex justify-between w-full items-center">
        <h2 className="font-semibold">{data.title}</h2>
        <div className="p-2 bg-white rounded-full">
          <ChartSpline color="black" />
        </div>
      </div>
    </div>
  )
}
