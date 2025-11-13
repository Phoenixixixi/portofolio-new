import { BackgroundGradientAnimation } from './ui/background-gradient-animation'
import './ui/styles/bg-animate.css'
export default function Index({ src }) {
  return (
    <BackgroundGradientAnimation
      className={'w-full h-full '}
      containerClassName={' backdrop-blur-xl hover:scale-95 duration-200'}
      firstColor="oklch(64.5% 0.246 16.439)"
      secondColor="oklch(45.2% 0.211 324.591)"
      thirdColor="oklch(49.6% 0.265 301.924)"
      size="80%"
      interactive="true"
    >
      <div
        className="w-full h-36 
        border border-white/20 
        rounded-xl 
        shadow-lg 
        overflow-hidden
        flex justify-center
        z-30
        "
      >
        {/* optional efek highlight halus */}

        <img src={src} alt="" className="w-14 invert brightness-0" />
      </div>
    </BackgroundGradientAnimation>
  )
}
