import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Header from './components/header'
import Footer from './components/footer'
import SideBar from './components/sideBar'

function App() {
  return (
    <main className='site_wrapper'>
      <Header />
      <SideBar />
      <div className='main_content_wrap'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      <Footer />
    </main>
  )
}

export default App