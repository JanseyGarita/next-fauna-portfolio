import Link from 'next/link'
import { colors } from '@/variables/global'

const SiteLogo = () => (
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
        font: normal normal 700 30px/48px 'Times New Roman', Times, serif;
        left: 29px;
        position: fixed;
        top: 22px;
      }
    `}</style>
  </>
)

export default SiteLogo
