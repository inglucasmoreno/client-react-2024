import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../login/LoginPage"
import { InitPage } from "../init/InitPage"
import { PagesRouter } from "@/pages/router/PagesRouter"



export const AuthRouter = () => {
  return (
    <Routes>
        <Route path="/auth/login" element={ <LoginPage /> } />
        <Route path="/init" element={ <InitPage /> } />
        {/* <Route path="/*" element={ <Navigate to="/auth/login"/> } /> */}
        <Route path="/*" element={ <PagesRouter /> } />
    </Routes>
  )
}	