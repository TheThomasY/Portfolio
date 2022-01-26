// Next
import Link from 'next/link'

// React Icons
import { AiOutlineFolderOpen, AiFillGithub } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'

export default function ProjectCard(props) {
  return (
    <div className="flex transform flex-col rounded-lg bg-card py-7 px-5 shadow-md">
      <div className="flex items-center">
        <AiOutlineFolderOpen color="#3F3FFF" size={40} />
        <Link href={props.project.github}>
          <a className="has-tooltip ml-auto cursor-pointer" target="_blank">
            <AiFillGithub
              className="transform duration-200 ease-in-out hover:scale-125"
              color="#ffffff"
              size={35}
            />
            <span className="tooltip">GitHub</span>
          </a>
        </Link>
        <Link href={props.project.link}>
          <a
            className="has-tooltip ml-4 cursor-pointer lg:ml-6"
            target="_blank"
          >
            <BiLinkExternal
              className="transform duration-200 ease-in-out hover:scale-125"
              color="#ffffff"
              size={35}
            />
            <span className="tooltip">Demo</span>
          </a>
        </Link>
      </div>
      <div className="mt-8 text-xl font-bold">{props.project.title}</div>
      <p className="my-5 text-secondary">{props.project.description}</p>
      <div className="mt-10 pt-2 text-sm tracking-wide text-secondary md:mt-auto">
        {props.project.tech}
      </div>
    </div>
  )
}
