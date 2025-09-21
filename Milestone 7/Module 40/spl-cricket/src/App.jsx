import './App.css'



import NavBar from './components/NavBar/NavBar'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import { Suspense, useState } from 'react'
import React from 'react'

const fetchplayer = async() =>{
  const res = await fetch('/players.json')
  return res.json()
}


function App() {
  const [toggle, setToggle] = useState(true)
  const playersPromise = fetchplayer();
  

  return (
    <>
      <NavBar ></NavBar>

      <div>
            <div className='max-w-[1200px] mx-auto my-4 flex justify-between items-center gap-4 font-bold'>
                <div className='font-bold text-2xl'>Available Players</div>
                <div>
                <button onClick={() => setToggle(true)} className={`py-3 px-4 border-1 border-r-0 rounded-l-2xl rounded-r-0 ${toggle === true ? 'bg-[#E7FE29]' : ''} hover:bg-[#D6D600]`}>Available</button>
                    <button onClick={() => setToggle(false)} className={`py-3 px-4 border-1 border-l-0 rounded-r-2xl rounded-l-0 ${toggle === false ? 'bg-[#E7FE29]' : ''} hover:bg-[#D6D600]`}>Selected</button>
                </div>
            </div>
            
        </div>

      {
        toggle === true ? <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense> : <SelectedPlayers ></SelectedPlayers>
      }
    </>
  )
}

export default App
