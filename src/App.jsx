import React, { Suspense, useState } from 'react'
import Navbar from './navbar/Navbar'
import Banner from './banner/Banner'
import Player from './player/Player';

const App = () => {
const [coin , setCoin] = useState(10000);
const fetchPlayer = async()=>{
const res = await fetch('/players.json') 

const player = res.json()
return player
}
 const playerPromise = fetchPlayer() 
  return (
    <div>
      <Navbar coin={coin}/>
      <Banner/>
      <Suspense fallback={<p>Loading</p>}>
      <Player coin={coin} setCoin={setCoin}  playerPromise={playerPromise}/>
      </Suspense>
    </div>
  )
}

export default App