import { useState } from 'react'

import siteMetadata from '../data/siteMetadata'
import projectsData from '../data/projectData'
import techStackData from '../data/techStackData'
import Card from '../components/Card'
import { PageSEO } from '../components/SEO'


export default function Projects() {
  const [filter, setFilter] = useState('');

  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">Demo projects I have built</p>
        </div>
        <div className="container">
          <div className="flex flex-wrap">
            <span key={`all`} className="mr-2 my-1 rounded-full border px-3 text-sm py-2 font-medium bg-gray-200 dark:bg-black cursor-pointer" onClick={(e) => setFilter('')}>All Projects</span>  
            {techStackData.map((tech, i) => (
              <span key={`tech_${i}`} className="mr-2 my-1 rounded-full border px-3 text-sm py-2 font-medium bg-gray-200 dark:bg-black cursor-pointer" onClick={(e) => setFilter(tech.name)}>{tech.name}</span>
            ))}
          </div>
          <div className="flex flex-wrap m-4">
            {projectsData.map((project) => project.techStack.includes(filter) && (
              <Card
                key={project.title}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                imgSrc={project.imgSrc}
                demo={project.demo}
                github={project.github}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
