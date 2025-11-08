export default function List({ dataList, desc, icon }) {
  return (
    <div
      className="p-3 px-3 bg-neutral-100/2 backdrop-blur-xl rounded-lg text-white text-2xl 
    tracking-wide border-1 border-white/30 flex flex-col items-center"
    >
      <div className="bg-neutral-100/40 p-2 rounded-full">{icon}</div>
      <p className="text-sm text-center font-semibold mt-4">{dataList}</p>
      <p className="text-justify mt-2 text-sm">{desc}</p>
    </div>
  )
}
