import {educationData, experienceData, skillsData} from '../data/resumeData'

export default function Resume() {
  return (
    <div className="mx-4">
        <div className="flex flex-row">
            <div className="w-3/4">
            <h1 className="mb-4 text-4xl text-gray-700 font-bold">Experience</h1>
            <ul>
                {experienceData.map((experience, i) => (
                <li key={`experience_${i}`}className="mb-4">
                <h2 className="text-2xl font-medium text-gray-600">
                    {experience.title}
                </h2>
                <div className="mt-1">
                    <div>
                    <small className="text-base text-gray-600">
                        {experience.company}
                    </small>
                    </div>
                    <div>
                    <small className="text-sm text-gray-400">{experience.duration}</small>
                    </div>
                </div>
                </li>    
                ))}
            </ul>
            </div>
            <div className="w-1/4">
            <h1 className="mb-4 text-4xl text-gray-700 font-bold">Skills</h1>
            <ul>
                <li className="mb-6 flex flex-wrap">
                {skillsData.map((skill, i) => (
                    <span key={`skill_${i}`}
                        className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
                        {skill.name}</span
                    >                    
                ))}
                </li>
            </ul>
            </div>
        </div>
        <div>
          <h1 className="mb-4 text-4xl text-gray-700 font-bold">Education</h1>
          <ul>
            {educationData.map((education, i) => (
            <li key={`education_${i}`} className="mb-4">
              <h2 className="text-2xl font-medium text-gray-600">
                {education.degree}
              </h2>
              <div className="mt-1">
                <div>
                  <small className="text-base text-gray-600">
                    {education.university}
                  </small>
                </div>
                <div>
                  <small className="text-sm text-gray-400">{education.year}</small>
                </div>
              </div>
            </li>
            ))}
          </ul>
        </div>        
    </div>
  )
}
