import { spacing } from '@/variables/global'

const Footer = () => (
  <>
    <footer className="border-top py-4">
      <div>
        <p>Copyright © {new Date().getFullYear()} Jansey Garita</p>
      </div>
    </footer>
    <style jsx>{`
      footer > div {
        align-items: center;
        display: flex;
        justify-content: center;
        padding: ${spacing.spacing07} 0;
      }
    `}</style>
  </>
)

export default Footer
