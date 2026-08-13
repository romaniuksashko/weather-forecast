import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import News from './components/News/News'
import Menu from './components/Menu/Menu'

function App() {
  const [menu, setMenu] = useState(false);
  
  return (
    <>
      <Header menu={menu} setMenu={setMenu} />
      
      <Hero />
      <News />
      <Footer />
      {menu && <Menu/>}
    </>
  )
}

export default App
