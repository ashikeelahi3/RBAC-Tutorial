import React from 'react'

function Nav() {
  return (
    <nav className="flex gap-4 bg-gray-700 p-4 text-white">
      <a href="/" className="text-lg font-medium">Home</a>
      <a href="/about" className="text-lg font-medium">About</a>
      <a href="/dashboard" className="text-lg font-medium">Dashboard</a>
      <a href="/admin" className="text-lg font-medium">Admin</a>
    </nav>
  )
}

export default Nav