import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import SiteLogo from 'components/Logo'
import SideScrollSpy from 'components/SideScrollSpy'
import Footer from 'components/Footer'
import ContactButton from 'components/Buttons/ContactButton'
import ContactMe from '../Contact'

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="d-flex">
      <Sidebar>
        <SiteLogo />
        <SideScrollSpy />
      </Sidebar>
      <div className="content w-100">
        {children}
        <ContactMe />
      </div>
      <Sidebar />
    </main>
    <ContactButton />
    <Footer />
  </>
)

export default Layout
