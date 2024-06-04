import { Route, Routes } from "react-router-dom"

import { AuthRouter } from "@/auth/router/AuthRouter"
import { useAuth } from "@/hooks/useAuth";

export const AppRouter = () => {

    const { checkAuthToken } = useAuth();
    checkAuthToken();

    return (
        <Routes>
            <Route path="/*" element={<AuthRouter />} />
        </Routes>
    )

}