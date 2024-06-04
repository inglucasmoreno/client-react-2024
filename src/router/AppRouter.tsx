import { Route, Routes } from "react-router-dom"

import { AuthRouter } from "@/auth/router/AuthRouter"
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";

export const AppRouter = () => {

    const { checkAuthToken } = useAuth();

    useEffect(() => {
        checkAuthToken();
    }, []);

    return (
        <Routes>
            <Route path="/*" element={<AuthRouter />} />
        </Routes>
    )

}