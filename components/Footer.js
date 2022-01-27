// React Icons
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai'
import { FaDev } from 'react-icons/fa'

// Next
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="container mx-auto mt-16 w-full px-8 md:mt-32 md:px-14 lg:mt-32 lg:px-36">
      <section className="w-full">
        <h2 id="contact" className="secondary-title">
          Contact Me
        </h2>
        <div className="md:grid md:grid-cols-2 md:gap-x-10">
          <div>
            <p className="section-paragraph">
              If you want to work with me feel free to get in touch via my
              email.
            </p>
            <a
              href="mailto:tomyoungdev@gmail.com"
              className="text-secondary underline"
            >
              tomyoungdev@gmail.com
            </a>
          </div>
          <div>
            <p className="mt-12 mb-6 w-full max-w-3xl text-secondary md:mt-6">
              Or feel free to follow me on any of the following.
            </p>
            <div className="flex justify-between gap-x-10 md:justify-start">
              <Link href="https://github.com/TheThomasY">
                <a className="cursor-pointer" target="_blank">
                  <AiFillGithub
                    className="transform duration-200 ease-in-out hover:scale-125"
                    color="#ffffff"
                    size={40}
                  />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/tomyoungdev/">
                <a className="cursor-pointer" target="_blank">
                  <AiFillLinkedin
                    className="transform duration-200 ease-in-out hover:scale-125"
                    color="#ffffff"
                    size={40}
                  />
                </a>
              </Link>
              <Link href="https://twitter.com/TheThomasYoung">
                <a className="cursor-pointer" target="_blank">
                  <AiFillTwitterCircle
                    className="transform duration-200 ease-in-out hover:scale-125"
                    color="#ffffff"
                    size={40}
                  />
                </a>
              </Link>
              <Link href="https://dev.to/thetomy">
                <a className="cursor-pointer" target="_blank">
                  <FaDev
                    className="transform duration-200 ease-in-out hover:scale-125"
                    color="#ffffff"
                    size={40}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
