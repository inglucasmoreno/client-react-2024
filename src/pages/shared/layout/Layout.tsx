import { Header } from "../header/Header"
import { Navbar } from "../navbar/Navbar"

export const Layout = ({ children }: any) => {
  return (
    <div>
      <div className="flex">
        <Navbar />
        <Header />
      </div>
      <div className="h-screen">
        {children}
      </div>
    </div>
  )
}

