import { ChartSpline } from 'lucide-react'
export default function CardSwitch({ data }) {
  return (
    <div>
      <p className="text-sm font-light">{data.desc}</p>
      <div className="flex justify-between w-full items-center">
        <h2 className="font-semibold md:text-sm xl:text-lg">{data.title}</h2>
      </div>
    </div>
  )
}
