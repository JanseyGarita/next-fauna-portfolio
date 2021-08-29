import data from 'content/competencies'
import { competenciesStyles } from './styles'
import Image from 'next/image'

const Competencies = () => {
  const competencies = JSON.parse(data.list)

  return (
    <>
      <div className="competencies-section">
        <div className="competencies-container">
          {competencies.map((group, i) => (
            <div className="competencies-group" key={i}>
              {group.map((item, j) => (
                <Box key={j} {...item} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{competenciesStyles}</style>
    </>
  )
}

const Box = ({ name, ...rest }) => {
  return (
    <div className={`competencies-item ${name}`}>
      <Image
        alt="Logo Image"
        src={`/logos/${name}.png`}
        priority={true}
        {...rest}
      />
    </div>
  )
}

export default Competencies
