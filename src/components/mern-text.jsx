export default function MernText({ children }) {
  return (
    <main className="w-full h-screen relative flex items-center">
      <div className="text-center text-white">
        <h1 className="text-5xl md:text-8xl xl:text-[10rem] font-semibold tracking-widest leading-none">
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
