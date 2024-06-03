import { Route, Routes } from "react-router-dom"

import { AuthRouter } from "@/auth/router/AuthRouter"

export const AppRouter = () => {
   return (
        <Routes>
            <Route path="/*" element={<AuthRouter />} />
        </Routes>
    )

}