import { spacing } from '@/variables/global'
import useSections from 'hooks/useSections'
import { useEffect, useState } from 'react'
import Scrollspy from 'react-scrollspy'
import NavLink from './NavLink'

const Navbar = () => {
  const { sections, getIDs } = useSections('.scrollspy')
  const [isOnTop, setIsOnTop] = useState(true)
  const ids = getIDs()

  useEffect(() => {
    const handleScroll = () => {
      if (isOnTop && window.scrollY > 10) {
        setIsOnTop(false)
      }
      if (!isOnTop && window.scrollY <= 10) {
        setIsOnTop(true)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOnTop])

  return (
    <>
      <nav className={`navbar-menu${!isOnTop ? ' blur' : ''}`}>
        {ids.length !== 0 && (
          <Scrollspy
            items={ids}
            offset={0}
            currentClassName="active"
            componentTag="ul"
          >
            {sections.map((link, index) => (
              <NavLink link={link.id} text={link.dataset.title} key={index} />
            ))}
          </Scrollspy>
        )}
      </nav>

      <style jsx global>{`
        .navbar-menu {
          left: 0;
          position: fixed;
          transition: backdrop-filter 0.3s ease;
          width: 100%;
          will-change: backdrop-filter;
          z-index: 1;
        }

        .navbar-menu.blur {
          -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
          background: #ffffff26;
          border-radius: 10px;
          border: 1px solid #ffffff2e;
        }

        .navbar-menu ul {
          display: flex;
          justify-content: center;
          margin-bottom: 0;
          margin: 0;
          padding: ${spacing.spacing07} 0;
          position: relative;
          transition: padding 0.2s ease;
          will-change: padding;
        }

        .navbar-menu.blur ul {
          padding: ${spacing.spacing05} 0;
        }
      `}</style>
    </>
  )
}
export default Navbar
