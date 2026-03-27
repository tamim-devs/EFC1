import React from 'react'

const Navbar = ({coin}) => {
  return (
    <div>
    <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">EFC1</a>
  </div>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost flex border-white w-20">
   {coin}
    </button>
  </div>
</div>
    </div>
  )
}

export default Navbar