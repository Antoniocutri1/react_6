import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/Main'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from './views/Homepage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/counter"} element={<Main.Counter/>} />
          <Route path={"/form"} element={<Main.Form />} />
          <Route path={"/posts"} element={<Main.LoadingData/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
