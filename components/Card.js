import Image from "next/image"
import Link from "next/link"

export default function Card({ title, description, techStack, imgSrc, demo, github }) {
  return (
    <div className="p-4 md:w-1/2 md">
      <div className="h-full flex flex-col overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700">
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center lg:h-48 md:h-36"
          width={544}
          height={306}
        />
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div className="">
            <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
              {title}
            </h2>
            <p className="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">{description}</p>
            <p className="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">Built With: {techStack}</p>
          </div>
          <div className="flex">
            {github && (
              <div className="mr-3">
                <Link
                  href={github}
                  onClick={() => {ga.event({
                    action: `${title} Github Click`,
                    params : {}
                  })}}
                  className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label={`Link to ${title} github`}
                >
                  Github
                </Link>
              </div>
            )}
            {demo && (
              <div>
                <Link
                  href={demo}
                  onClick={() => {ga.event({
                    action: `${title} Demo Click`,
                    params : {}
                  })}}
                  className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label={`Link to ${title} demo`}
                >
                  Demo
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
