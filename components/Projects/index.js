import { spacing } from '@/variables/global'
import { useState } from 'react'
import Image from 'next/image'
import ProjectModal from './ProjectModal'
import projects from 'content/projects'

const Projects = () => (
  <>
    <div className="row justify-content-start">
      {projects.map((project) => (
        <Project key={project.title} {...project} />
      ))}
      <div className="col-sm-6 d-flex align-items-center">
        <h4 className="w-100 text-center">More projects coming soon...</h4>
      </div>
    </div>
  </>
)

const Project = ({ title, src, tag, ...rest }) => {
  const [isActive, setActive] = useState(false)
  const handleClick = () => setActive(!isActive)

  return (
    <>
      <div
        aria-hidden="true"
        aria-labelledby={title}
        className="project col-sm-6"
        onClick={handleClick}
      >
        <Image
          alt={title}
          className="project-img"
          height={250}
          quality={90}
          src={src}
          width={450}
        />
        <div className="content">
          <small>{tag}</small>
          <h3>{title}</h3>
        </div>

        {isActive && (
          <ProjectModal
            handleClose={handleClick}
            id={title}
            title={title}
            {...rest}
          />
        )}
      </div>
      <style jsx global>{`
        .project {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          margin: ${spacing.layout01} 0;
          padding: ${spacing.spacing05} 0;
        }

        .project:hover {
          background-color: #f4f4f460;
        }

        .project-img {
          object-fit: contain;
        }

        .project .content {
          padding: ${spacing.spacing03} 0 0 ${spacing.spacing05};
          width: 100%;
        }
      `}</style>
    </>
  )
}

export default Projects
