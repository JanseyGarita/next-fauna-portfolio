import { colors, spacing } from '@/variables/global'
import { useRouter } from 'next/router'

const NavLink = ({ link, text, ...rest }) => {
  const { asPath } = useRouter()
  const isActive = asPath === link ? 'active' : ''

  return (
    <>
      <li {...rest}>
        <a className={isActive} href={`#${link}`}>
          {text}
        </a>
      </li>
      <style jsx>{`
        li {
          margin: ${spacing.spacing02} ${spacing.spacing07};
        }

        a {
          color: ${colors.primary};
          font-family: sans-serif;
          letter-spacing: 0.055rem;
          opacity: 0.8;
          transition: opacity 0.3s ease-in-out;
          text-transform: uppercase;
          z-index: 1;
        }

        li.active a,
        a.active {
          font-weight: 600;
        }

        li.active a,
        a.active,
        a:hover {
          opacity: 1;
        }

        a.active {
          pointer-events: none;
        }
      `}</style>
    </>
  )
}

export default NavLink
