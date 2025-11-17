import Home from './pages/home'
import Count from './pages/count'
import Stack from './pages/stack'
import BackgroundCircle from './components/background/bg-circle'
import About from './pages/about'
import Services from './pages/services'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Footer from './pages/footer'
import Alert from './components/alert'
import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
function App() {
  const [showAlert, setShowAlert] = useState({
    show: false,
    status: '',
  })
  const triggerAlert = (status) => {
    setShowAlert((prev) => ({
      ...prev,
      show: true,
      status,
    }))
    setTimeout(() => {
      setShowAlert((prev) => ({
        ...prev,
        show: false,
        status: '',
      }))
    }, 9000)
  }
  return (
    <>
      <Analytics />
      <Alert show={showAlert.show} status={showAlert.status} />
      <div className="flex flex-col">
        <Home />
      </div>

      <div className="body px-4 md:px-8 xl:px-18 relative">
        <BackgroundCircle cs={'-left-98 -top-2 '} />
        <BackgroundCircle cs={'left-1/2 top-1/2 translate-y-1/2'} />
        <About />
        <Count />
        <Stack />
      </div>
      <div>
        <Services />
        <Projects />
      </div>
      <div>
        <Contact triggerAlert={triggerAlert} />
      </div>
      {/* <footer>
        <Footer />
      </footer> */}
    </>
  )
}

export default App
