import React from 'react'

export default function About() {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
            Hello, I&apos;m Patrick.
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              I am a freelance Full Stack Developer. I specilize in front end development for data driven applications, 
              specifically with Artificial Intelligence and Machine Learning features.
            </p>
            <p className="mb-4">
              I work primarily with the React ecosystem for the front end and Python (Django\Flask) or Node (Express) in the back end.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
