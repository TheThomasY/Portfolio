// React
import React from 'react'

export default function SideMenu(props) {
  return (
    <nav className="fixed top-[40%] left-[2%] z-50 hidden lg:block lg:w-4">
      <div className="flex flex-col gap-y-5">
        <a
          href="#"
          className={
            'nav-dot' + (props.current === 'home' ? ' selected-circle' : '')
          }
        >
          <span className="ml-8 rounded-md bg-black px-2 py-1 opacity-0">
            Home
          </span>
        </a>
        <a
          href="#work"
          className={
            'nav-dot' + (props.current === 'work' ? ' selected-circle' : '')
          }
        >
          <span className="ml-8 rounded-md bg-black px-2 py-1 opacity-0">
            Work
          </span>
        </a>
        <a
          href="#contact"
          className={
            'nav-dot' + (props.current === 'contact' ? ' selected-circle' : '')
          }
        >
          <span className="ml-8 rounded-md bg-black px-2 py-1 opacity-0">
            Contact
          </span>
        </a>
      </div>
    </nav>
  )
}
