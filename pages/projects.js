import siteMetadata from '../data/siteMetadata'
import projectsData from '../data/projectData'
import Card from '../components/Card'
import { PageSEO } from '../components/SEO'

export default function Projects() {
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
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {projectsData.map((project) => (
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
