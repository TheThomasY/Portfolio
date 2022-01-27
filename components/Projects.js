// React
import { React, useEffect } from 'react'

// Components
import ProjectCard from './ProjectCard'

export default function Projects() {
  // Not ideal solution. Need to investigate CMS to replace this.
  const projects = [
    {
      title: 'Restaurant Tip Calculator',
      description:
        'This site makes splitting a bill much easier. Simply enter the total bill amount, tip percentage and number of people - this will calculate the required tip per person and also the total each person owes.',
      tech: 'React SCSS',
      github: 'https://github.com/TheThomasY/React-Tip-Calculator',
      link: 'https://thethomasy.github.io/React-Tip-Calculator/',
    },
    {
      title: 'IP Address Tracker',
      description:
        'Enter an IP address from anywhere in the world and see an interactive map corresponding to its location. Need an example address? Try 8.8.8.8 or 17.0.0.0 for two famous tech companies.',
      tech: 'React SCSS',
      github: 'https://github.com/TheThomasY/IP-Address-Tracker',
      link: 'https://thethomasy.github.io/IP-Address-Tracker/',
    },
    {
      title: 'Social Media Dashboard',
      description:
        'An example of dashboard UI designed to present social media follower metrics. It has a toggle that allows you to switch between light and dark mode.',
      tech: 'React Tailwind',
      github: 'https://github.com/TheThomasY/social-media-dashboard',
      link: 'https://thethomasy.github.io/social-media-dashboard/',
    },

    {
      title: 'Loopstudios Landing Page',
      description:
        'An example of a company landing page. The site is fully responsive, looks great at all screen widths, and includes some subtle and clean animation.',
      tech: 'HTML SCSS',
      github: 'https://github.com/TheThomasY/Loopstudios-Landing-Page',
      link: 'https://thethomasy.github.io/Loopstudios-Landing-Page/',
    },
  ]

  return (
    <div className="container -z-0 mx-auto mt-24 w-full px-8 md:mt-32 md:px-14 lg:px-36 xl:mt-64">
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
