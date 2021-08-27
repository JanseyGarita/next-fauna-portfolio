import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import SiteLogo from 'components/Logo'
import SideScrollSpy from 'components/SideScrollSpy'
import Footer from 'components/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="d-flex">
        <Sidebar>
          <SiteLogo />
          <SideScrollSpy />
        </Sidebar>
        <div className="content w-100">{children}</div>
        <Sidebar />
      </main>
      <Footer />
    </>
  )
}
export default Layout
