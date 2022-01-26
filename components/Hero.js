// React
import React from 'react'

// React Icons
import { AiOutlineEye } from 'react-icons/ai'

export default function Hero() {
  return (
    <div className="container mx-auto mt-16 flex w-full flex-col items-center px-8 md:flex-row md:px-14 lg:px-36">
      <div className="flex flex-col items-center justify-center">
        <h1 className="w-full text-center text-5xl font-bold leading-tight md:text-left xl:text-7xl">
          Building responsive and beautiful websites.
        </h1>
        <div className="z-10 flex w-full justify-center md:justify-start">
          <a href="#work">
            <button className="mt-12 flex items-center bg-theme px-8 py-4 font-bold text-white hover:bg-button-hover ">
              <AiOutlineEye size={20} />
              <span className="ml-2">View My Work</span>
            </button>
          </a>
        </div>
      </div>
      <div className="relative mt-12 w-3/4 md:mt-0 md:w-full">
        <img src="./images/hero-image.svg" alt="Illustration of man coding" />
      </div>
    </div>
  )
}
