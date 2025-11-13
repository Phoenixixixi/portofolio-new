import InputForm from '@/components/input'
import { Textarea } from '@/components/ui/textarea'
import BackgroundCircle from '@/components/background/bg-circle'
import { Mail, MapPin } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'
export default function Contact() {
  return (
    <div className="h-full w-full mt-8 pl-18 py-8 pb-0 relative">
      <BackgroundCircle cs={'right-1 z-10'} />
      <div className="grid grid-cols-2 h-full gap-x-6">
        <div className="flex flex-col justify-center pt-0">
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
          <div className="text-white/60 mt-12 text-[.9rem] grid grid-rows-3 gap-y-3 items-end-safe">
            <div className="flex items-center gap-x-2">
              <Mail size={16} />
              <p>mhammaddustin@gmail.com</p>
            </div>
            <div className="flex items-center gap-x-2">
              <MapPin size={16} />
              <p>Bandung, West Java, Indonesia</p>
            </div>
            <div className="flex items-center gap-x-2">
              <FaInstagram size={16} />
              <p>@daastin.m</p>
            </div>
          </div>
        </div>
        <div className="h-full">
          <img src="Building_web.webp" alt="" className="grayscale-100" />
        </div>
      </div>
    </div>
  )
}
