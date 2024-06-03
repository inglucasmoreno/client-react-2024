import { useEffect } from "react";
import { Route, Routes } from "react-router-dom"

import { AuthRouter } from "@/auth/router/AuthRouter"
import { useAuth } from "@/hooks/useAuth";

export const AppRouter = () => {

    // const { status, checkAuthStore } = useAuth();

    // useEffect(() => {
    //     console.log('Checking...')
    //     checkAuthStore();
    // }, [])

    // if(status === 'checking'){
    //     return(
    //         <>
    //             Cargando...
    //         </>
    //     )
    // }

    return (
        <Routes>
            {/* <Route path="/*" element={<PagesRouter />} /> */}
            <Route path="/*" element={<AuthRouter />} />
        </Routes>
    )

}