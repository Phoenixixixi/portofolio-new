import InputForm from '@/components/input'
import { Textarea } from '@/components/ui/textarea'
import BackgroundCircle from '@/components/background/bg-circle'
import { Mail, MapPin } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'
import { useState } from 'react'
import messagePost from '@/services/messagePost'
export default function Contact() {
  const [message, setMessage] = useState({
    name: '',
    email: '',
    message: '',
  })
  const handleChange = (field) => (e) => {
    setMessage((prev) => ({
      ...prev,
      [field]: e.target.value,
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    messagePost(message)
  }
  return (
    <div className="h-full w-full md:mt-0 md:pl-8 xl:pl-18 md:py-8 relative mt-42 p-4 pb-0 md:pb-0">
      <BackgroundCircle cs={'right-1 z-10'} />
      <div className="grid md:grid-cols-2 h-full gap-x-6">
        <div className="flex flex-col justify-end 2xl:justify-center  pt-0 pb-4 bg">
          <p className="text-white text-5xl md:text-[4rem]  font-medium tracking-tighter leading-18">
            LET'S WORK TOGETHER
          </p>
          <form
            className="flex flex-col gap-y-6 mt-8 w-full"
            onSubmit={handleSubmit}
          >
            <InputForm
              forText={'text'}
              text={'Name'}
              value={message.name}
              onChange={handleChange('name')}
            />
            <InputForm
              forText={'email'}
              text={'Email'}
              value={message.email}
              onChange={handleChange('email')}
            />
            <Textarea
              placeholder="Type your message here."
              className={'border-white/20 h-32 text-white'}
              value={message.message}
              onChange={handleChange('message')}
            />
            <button
              className="bg-white px-1 py-2 rounded-full active:scale-95 duration-100"
              type="submit"
            >
              Send
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
        <div className="p-0 flex items-end">
          <img
            src="Building_web.webp"
            alt=""
            className="grayscale-100 object-center"
          />
        </div>
      </div>
    </div>
  )
}
