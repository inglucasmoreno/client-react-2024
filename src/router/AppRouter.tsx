import { AuthRouter } from "@/auth/router/AuthRouter"
import { PagesRouter } from "@/pages/router/PagesRouter"
import { Route, Routes } from "react-router-dom"

export const AppRouter = () => {

    return (
        <Routes>
            {/* <Route path="/*" element={<PagesRouter />} /> */}
            <Route path="/*" element={<AuthRouter />} />
        </Routes>
    )

}