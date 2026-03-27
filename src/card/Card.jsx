import React, { useState } from 'react'

const Card = ({player,coin,setCoin,selectedPlayer,setSelectedPlayer}) => {
const [selectedPlayers , setSelectedPlayers] = useState(false)

const handleChosePlayer = (e)=>{
 e.preventDefault()
  const price = parseInt(player.price)
  if (coin < price) {
    return alert('No Enogh coin')
  }
setSelectedPlayers(true);
const newCoin = coin - price;
  setCoin(newCoin)
  setSelectedPlayer([...selectedPlayer,player])
}

  return (
<div className='flex'>
<div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300 w-72">
  
  {/* Player Image */}
  <img
    src={player.image}
    alt={player.name}
    className="w-full h-44 object-cover rounded-xl mb-4"
  />

  {/* Player Info */}
  <div className="space-y-2">
    <h1 className="text-xl font-bold text-gray-800">
      {player.name}
    </h1>

    <p className="text-sm text-gray-500">
      Role: {player.role}
    </p>

    <p className="text-sm text-gray-500">
      Country: {player.country}
    </p>

    <p className="text-lg font-semibold text-green-600">
      ${player.price}
    </p>
  </div>

  {/* Button */}
  <button type="button"
 disabled={selectedPlayers} onClick={handleChosePlayer} className="mt-4 w-full bg-[#E7FE69] text-black font-semibold py-2 rounded-xl hover:bg-yellow-300 transition">
   {selectedPlayers === true ? "Selected" : "Choose Player"}
  </button>
</div>
</div>
  )
}

export default Card