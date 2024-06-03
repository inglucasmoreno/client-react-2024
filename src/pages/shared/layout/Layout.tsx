import { Header } from "../header/Header"
import { Navbar } from "../navbar/Navbar"

export const Layout = ({ children }: any) => {
  return (
    <div className="flex">
      <Navbar />
      <div className="h-full w-full">
        <Header />
        {children}
      </div>
    </div>
  )
}

