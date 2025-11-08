import InputForm from '@/components/input'
import { Textarea } from '@/components/ui/textarea'
export default function Contact() {
  return (
    <div className="h-screen w-full mt-18 pl-18 py-8">
      <div className="grid grid-cols-2 h-full gap-x-6">
        <div className="flex flex-col justify-center">
          <p className="text-white text-[4rem] font-medium tracking-tighter leading-18">
            LET'S WORK TOGETHER
          </p>
          <form className="flex flex-col gap-y-6 mt-8 w-full">
            <InputForm forText={'text'} text={'Name'} />
            <InputForm forText={'email'} text={'Email'} />
            <Textarea
              placeholder="Type your message here."
              className={'border-white/20 h-32 text-white'}
            />
            <button className="bg-white px-1 py-2 rounded-full">
              Send To Me
            </button>
          </form>
        </div>
        <div className="">
          <img src="Building_web.webp" alt="" className="grayscale-100" />
        </div>
      </div>
    </div>
  )
}
