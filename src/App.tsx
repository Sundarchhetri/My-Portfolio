import { Routes, Route } from 'react-router-dom'
import NavigationBar from './components/ui/NavigationBar'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact';
import Footer from './components/ui/Footer'
import Skills from './sections/Skills'
import ScrollToTop from './components/ui/ScrollToTop'
import BackToTop from './components/ui/BackToTop'
import { useEffect } from 'react'

const App = () => {
useEffect(() => {
  window.scrollTo(0,0);
},[])
  
  return (
    <>
      <NavigationBar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
