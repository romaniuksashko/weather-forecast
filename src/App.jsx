import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Section from './components/Section/Section'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Section>
        <Hero/>
      </Section>
      <Section>

      </Section>
      <Section>

      </Section>
      <Section>

      </Section>
      <Footer />
    </>
  )
}

export default App
