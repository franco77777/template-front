import React from 'react'

function NavbarButtons() {
  return (
    <div className="flex gap-3">
      <a
        href="https://github.com/"
        className="rounded-md border-b-4 border-pink-600 bg-pink-400 p-3 text-lg font-semibold text-[#202020] transition-all hover:border-b-2 max-md:p-1 max-md:text-base"
      >
        GitHub
      </a>
      <a
        href="/"
        className="rounded-md border-b-4 border-blue-700 bg-blue-500 p-3 text-lg font-semibold  text-[#202020] transition-all hover:border-b-2 max-md:p-1 max-md:text-base"
      >
        Documentation
      </a>
    </div>
  )
}

export default NavbarButtons
