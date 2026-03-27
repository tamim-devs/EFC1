import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'

const Selected = ({selectedPlayer, setSelectedPlayer, setCoin}) => {
  const handleDeleteSelected = (player)=>{
    const updated = selectedPlayer.filter(p => p.playerId !== player.playerId)
    setSelectedPlayer(updated)
    setCoin(prev => prev + parseInt(player.price))
  }

  return (
    <div>
      <div>
    {selectedPlayer.map((player) => (
        <div 
          key={player.id}
          className='flex items-center justify-between bg-white shadow-md rounded-xl p-3 hover:shadow-lg transition'
        >

          {/* Left side */}
          <div className='flex items-center gap-4'>

            <img 
              src={player.image} 
              alt={player.name} 
              className='w-12 h-12 rounded-full object-cover border'
            />

            <div>
              <h2 className='font-semibold text-lg'>{player.name}</h2>
              <p className='text-sm text-gray-500'>{player.role}</p>
            </div>

          </div>

          {/* Right side */}
          <button 
            onClick={() => handleDeleteSelected(player)}
            className='text-red-500 hover:bg-red-100 p-2 rounded-full transition'
          >
            <MdDelete size={20}/>
          </button>

        </div>
      ))}
      </div>
    </div>
  )
}

export default Selected