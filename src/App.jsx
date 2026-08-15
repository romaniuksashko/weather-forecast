import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import News from './components/News/News'
import Menu from './components/Menu/Menu'
import Modal from './components/Modal/Modal'

function App() {
  const [menu, setMenu] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const changeModal = () => {
    setSignUp((prev) => !prev)
  }

  const changeMenu = () => {
    setMenu((prev) => !prev)
  }
  
  return (
    <>
      <Header menu={menu} changeMenu={changeMenu} changeModal={changeModal} />

      <Hero />
      <News />
      <Footer />
      {menu && <Menu changeModal={changeModal} changeMenu={changeMenu} />}
      {signUp && <Modal changeModal={changeModal} />}
    </>
  );
}

export default App
