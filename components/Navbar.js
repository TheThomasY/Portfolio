import React, { useState } from 'react'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export default function Navbar() {
  const [showNav, setShowNav] = useState(false)

  const toggleNavHandler = () => {
    setShowNav(!showNav)
  }

  const closeNavOnSelect = () => {
    setShowNav(false)
  }

  return (
    <header className="py-6">
      <nav className="container mx-auto flex w-full flex-wrap items-center justify-between px-8 md:px-14 lg:px-24">
        <div className="text-lg font-bold">Tom Young</div>
        <div className="flex md:hidden">
          <button onClick={toggleNavHandler} className="z-50">
            {showNav ? (
              <AiOutlineClose size={'25px'} className="block" />
            ) : (
              <AiOutlineMenu size={'25px'} className="block" />
            )}
          </button>
        </div>
        <div
          className={
            'text-bold h-screen w-full pt-6 text-left md:flex md:h-auto md:w-auto md:flex-row ' +
            (showNav ? 'block' : 'hidden')
          }
        >
          <a
            onClick={closeNavOnSelect}
            href="#"
            className="block border-t py-5 hover:text-selected-text md:inline-block md:border-0 md:py-0 md:pl-10"
          >
            Home
          </a>
          <a
            onClick={closeNavOnSelect}
            href="#work"
            className="block border-t py-5 hover:text-selected-text md:inline-block md:border-0 md:py-0 md:pl-10"
          >
            My Work
          </a>
          <a
            onClick={closeNavOnSelect}
            href="#contact"
            className="block border-t py-5 hover:text-selected-text md:inline-block md:border-0 md:py-0 md:pl-10"
          >
            Contact
          </a>
          {/* <div className='absolute bottom-10'>Dark Mode</div> */}
        </div>
      </nav>
    </header>
  )
}
