import { breakpoints, spacing } from '@/variables/global'

const Sidebar = ({ classNameWrapper = '', children }) => {
  return (
    <>
      <aside className={classNameWrapper}>{children}</aside>

      <style jsx>{`
        aside {
          border-right: 1px solid #eaeaea;
          border-left: 1px solid #eaeaea;
          display: none;
          height: auto;
          left: 0;
          min-width: 96px;
          padding: ${spacing.spacing06} 0;
          position: relative;
          top: 0;
        }

        @media (min-width: ${breakpoints.tablet}) {
          aside {
            display: block;
            z-index: 1;
          }
        }
      `}</style>
    </>
  )
}

export default Sidebar
