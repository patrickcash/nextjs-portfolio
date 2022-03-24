import Mail from './mail.svg'
import Github from './github.svg'
import Linkedin from './linkedin.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
}

const Icon = ({ kind, href, size = 8 }) => {
  if (!href) return null

  const IconSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <IconSvg
        className={`fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export default Icon