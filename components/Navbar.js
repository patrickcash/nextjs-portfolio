import React from 'react'
import Link from "next/link"

import ThemeToggle from './ThemeToggle'
import navLinks from '../data/navLinks'
import siteMetadata from '../data/siteMetadata'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <Link href="/">
          <a
              className="font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
          >
              {siteMetadata.headerTitle}
          </a>
        </Link>
        <div className="w-1/3 flex items-center justify-between">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
            >
              {link.title}
            </Link>
          ))}
          <ThemeToggle/>
        </div>
      </div>
  </header>
  )
}
