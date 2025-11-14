export default function List({ dataList, desc, icon }) {
  return (
    <div
      className="xl:p-3 xl:px-3 rounded-lg text-white text-2xl 
    tracking-wide  flex flex-col items-center"
    >
      <div className="bg-neutral-100/40 p-2 rounded-full">{icon}</div>
      <p className="xl:text-sm text-[.7rem] md:text-[.9rem] text-center font-semibold mt-4">
        {dataList}
      </p>
      <p className="text-justify mt-2 xl:text-sm text-[.7rem]">{desc}</p>
    </div>
  )
}
