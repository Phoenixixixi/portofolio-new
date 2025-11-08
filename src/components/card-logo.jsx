import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
export default function Index({ data, key }) {
  return (
    <div
      className="bg-neutral-100/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl shadow-xl shadow-neutral-300/50"
      key={key}
    >
      <header className="flex justify-between items-center">
        <p className="text-white font-light">{data.title}</p>
      </header>
      <article className="mt-4">
        <p className="text-white text-justify font-extralight text-sm">
          {data.desc}
        </p>
      </article>
    </div>
  )
}
