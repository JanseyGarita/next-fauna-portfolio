import { colors } from '@/variables/global'
import useSections from 'hooks/useSections'
import Scrollspy from 'react-scrollspy'

const SideScrollSpy = () => {
  const { getIDs } = useSections('.scrollspy')
  const ids = getIDs()

  if (ids.length === 0) {
    return null
  }

  return (
    <>
      <nav className="side-scrollspy">
        <Scrollspy
          items={ids}
          offset={-100}
          currentClassName="is-current"
          componentTag="ul"
        >
          {ids.map((id, index) => (
            <li key={id}>
              <a href={'#' + id}>0{index + 1}</a>
            </li>
          ))}
        </Scrollspy>
      </nav>
      <style jsx>{`
        nav {
          left: 0;
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
        }

        ul {
          display: flex;
          justify-content: center;
          padding-left: 0;
          width: 95px;
        }

        li {
          margin: 5px 0;
        }

        li a {
          color: ${colors.primary};
        }

        li.is-current a {
          color: #000;
          font-size: 42px;
          line-height: 42px;
        }
      `}</style>
      <style jsx global>{`
        .side-scrollspy ul {
          justify-content: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </>
  )
}

export default SideScrollSpy
