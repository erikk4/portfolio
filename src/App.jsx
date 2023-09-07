import { useState } from 'react'
import viteLogo from '/vite.svg'
import Ausbildung from "./components/Ausbildung";
import Home from "./components/Home";
import Kenntnisse from "./components/Kenntnisse";
import NavBar from "./components/NavBar";
import Kontakt from "./components/Kontakt";

function App() {

  return (
    <>
      <div>
        <NavBar />
        <Home />
        <Ausbildung />
        <Kenntnisse />
        <Kontakt />
      </div>
    </>
  )
}

export default App
