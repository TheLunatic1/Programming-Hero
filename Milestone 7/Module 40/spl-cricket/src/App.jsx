import './App.css'



import NavBar from './components/NavBar/NavBar'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import ButtonsC from './components/ButtonsC/ButtonsC'
import { Suspense, useState } from 'react'

const fetchplayer = async() =>{
  const res = await fetch('/players.json')
  return res.json()
}


function App() {
  const [toggle, setToggle] = useState(false)
  const playersPromise = fetchplayer();
  

  return (
    <>
      <NavBar ></NavBar>
      <ButtonsC ></ButtonsC>

      {
        toggle === true ? <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense> : <SelectedPlayers ></SelectedPlayers>
      }
    </>
  )
}

export default App
