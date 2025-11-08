import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
export default function MernText({ children }) {
  return (
    <main className="w-full h-screen relative flex items-center pt-16">
      <div className="text-center text-white">
        <h1 className="text-[10rem] font-semibold tracking-widest leading-none">
          MERN
        </h1>
        <p className="text-white/80 text-sm mt-0 tracking-[1rem]">
          MONGO EXPRESS REACT NODE JS
        </p>

        <div className="">{children}</div>
      </div>
    </main>
  )
}
