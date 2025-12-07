import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/Main'

function App() {

  const names = ["Antonino", "Giovanni", "Mattia"]

  return (
    <>
      <Main>
        <Main.Counter/>

        <Main.Form />

        <Main.List items={names}/>
      </Main>
      
    </>
  )
}

export default App
