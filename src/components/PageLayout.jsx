import Navbar from './Navbar'
import Footer from './Footer'

export default function PageLayout({ children, withFooter = false }) {
  return (
    <>
      <Navbar />
      <main className="main-content">{children}</main>
      {withFooter && <Footer />}
    </>
  )
}
