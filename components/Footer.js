import React from 'react'

import siteMetadata from '../data/siteMetadata'

export default function Footer() {
  return (
    <footer className="mt-12 lg:mt-18 py-6">
      <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
        <div className="pb-8 mb-2"></div>
        <div className="flex flex-col justify-between lg:flex-row items-center">
            <p>{siteMetadata.author}{` • `}{`© ${new Date().getFullYear()}`}</p>
            <div className="flex flex-wrap m-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
                <a
                    href={siteMetadata.email}
                    className="text-gray-500 transition hover:text-gray-600 dark:text-white"
                    target="_blank"
                    rel="noreferrer"
                >
                    Email
                </a>
                <a
                    href={siteMetadata.github}
                    className="text-gray-500 transition hover:text-gray-600 dark:text-white"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
                <a
                    href={siteMetadata.linkedin}
                    className="text-gray-500 transition hover:text-gray-600 dark:text-white"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>
            </div>
        </div>
      </div>
    </footer>
  )
}
