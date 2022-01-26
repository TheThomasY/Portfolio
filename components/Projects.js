// React
import { React, useEffect } from 'react'

// Components
import ProjectCard from './ProjectCard'

export default function Projects() {
  // Not ideal solution. Need to investigate CMS to replace this.
  const projects = [
    {
      title: 'Social Media Dashboard',
      description:
        'A dashboard UI designed to present social media follower metrics.',
      tech: 'React Tailwind',
      github: 'https://github.com/TheThomasY/social-media-dashboard',
      link: 'https://thethomasy.github.io/social-media-dashboard/',
    },
    {
      title: 'IP Address Tracker',
      description:
        'Website allowing users to locate an IP address from anywhere in the world and see an interactive map corresponding to its location.',
      tech: 'React SCSS',
      github: 'https://github.com/TheThomasY/IP-Address-Tracker',
      link: 'https://thethomasy.github.io/IP-Address-Tracker/',
    },
    {
      title: 'Rock Paper Scissors',
      description:
        'Website allowing you to play the classic Rock Paper Scissors against the computer.',
      tech: 'React SCSS',
      github: 'https://github.com/TheThomasY/rock-paper-scissors',
      link: 'https://thethomasy.github.io/rock-paper-scissors/',
    },
    {
      title: 'Restaurant Tip Calculator',
      description:
        'Website that calculates the tip for a given bill. You can pick the tip percentage and how many people are splitting it.',
      tech: 'React SCSS',
      github: 'https://github.com/TheThomasY/React-Tip-Calculator',
      link: 'https://thethomasy.github.io/React-Tip-Calculator/',
    },
  ]

  return (
    <div className="container -z-0 mx-auto mt-16 w-full px-8 md:mt-32 md:px-14 lg:px-36 xl:mt-64">
      <section className="w-full">
        <h2 id="work" className="secondary-title scroll-m-5">
          My Work
        </h2>
        <p className="section-paragraph">
          I am a Front End Developer with a passion for creating websites and
          solving problems with code. Here are some of the things I&apos;ve
          worked on.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </section>
    </div>
  )
}
