import React from 'react'
import Card from '../card/Card';

const Available = ({players,coin,setCoin,selectedPlayer,setSelectedPlayer}) => {
  console.log(players);
  
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-4'>
        {players.map((player,index)=> {
          return <Card key={index} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} player={player} coin={coin} setCoin={setCoin}/>
        })}
      </div>
    </div>
  )
}

export default Available