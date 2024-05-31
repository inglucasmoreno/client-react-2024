import { Header } from "../header/Header"
import { Navbar } from "../navbar/Navbar"

export const Layout = ({ children }: any) => {
  return (
    <div className="flex items-center">
      <Navbar />
      <div className="h-screen w-full">
        <Header />
        {children}
      </div>
    </div>
  )
}

