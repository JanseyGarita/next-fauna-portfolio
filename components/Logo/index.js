import Link from 'next/link'
import { colors } from '@/variables/global'

const SiteLogo = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <Link href="/" prefetch={false}>
          <a className="logo">JG</a>
        </Link>
      </div>
      <style jsx>{`
        .logo {
          align-self: center;
          color: ${colors.primary};
          font-size: 30px;
          font-weight: 600;
          left: 29px;
          pointer-events: none;
          position: fixed;
          top: 22px;
        }
      `}</style>
    </>
  )
}

export default SiteLogo
