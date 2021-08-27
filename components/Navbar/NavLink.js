import { useRouter } from 'next/router'
import { navlinkStyles } from './styles'

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
      <style jsx>{navlinkStyles}</style>
    </>
  )
}

export default NavLink
