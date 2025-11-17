import { Eye, EyeOff } from 'lucide-react'

export default function ProjectBlock({
  status = true,
  children,
  title,
  src,
  link,
}) {
  const icon = status ? <Eye /> : <EyeOff />
  const label = status ? 'Available' : 'Not Available'

  return (
    <div className="border border-neutral-100/20 rounded-sm p-3 pb-8">
      <img src={src} alt={title} className="w-full rounded-sm w-72" />
      <p className="text-3xl mt-8 text-white font-semibold">{title}</p>
      <p className="text-sm text-white mt-4 h-24">{children}</p>

      <button className="bg-lime-400 px-3 py-1 mt-4 rounded-full flex items-center">
        {icon}
        <span className="ml-2 text-black font-medium">{label}</span>
      </button>
    </div>
  )
}

function redirect(link) {
  if (link) {
    window.location.href = link
    return
  } else {
    return
  }
}
