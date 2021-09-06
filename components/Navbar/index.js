import useSections from 'hooks/useSections'
import useWindowSize from 'hooks/useWindowSize'
import { useEffect, useState } from 'react'
import Scrollspy from 'react-scrollspy'
import NavLink from './NavLink'
import { navbarStyles } from './styles'

const Navbar = () => {
  const { sections, getIDs } = useSections('.scrollspy')
  const [isOnTop, setIsOnTop] = useState(true)
  const [isActive, setIsActive] = useState(false)
  const { width } = useWindowSize()
  const ids = getIDs()

  const handleToggle = () => {
    if (width < 992) {
      setIsActive(!isActive)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (isOnTop && window.scrollY > 10) {
        setIsOnTop(false)
      }
      if (!isOnTop && window.scrollY <= 10) {
        setIsOnTop(true)
      }
    }
    if (width >= 992) {
      window.addEventListener('scroll', handleScroll)
    }
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOnTop, width])

  return (
    <>
      <nav
        className={`navbar-menu${!isOnTop && width >= 992 ? ' blur' : ''}${
          isActive ? ' open' : ''
        }`}
      >
        {ids.length !== 0 && (
          <Scrollspy
            items={ids}
            offset={-100}
            currentClassName="active"
            componentTag="ul"
          >
            {sections.map((link, index) => (
              <NavLink
                link={link.id}
                text={link.dataset.title}
                key={index}
                onClick={handleToggle}
              />
            ))}
          </Scrollspy>
        )}
        {width < 992 && (
          <button
            className="navbar-toggle"
            onClick={handleToggle}
            aria-label="Menu"
          >
            {[...new Array(3)].map((_, index) => (
              <span key={index}></span>
            ))}
          </button>
        )}
      </nav>

      <style jsx global>
        {navbarStyles}
      </style>
    </>
  )
}
export default Navbar
