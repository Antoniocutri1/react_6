import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/Main'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <Main>
        <Main.Counter/>

        <Main.Form />

        <Main.LoadingData/>
      </Main>
    </>
  )
}

export default App
