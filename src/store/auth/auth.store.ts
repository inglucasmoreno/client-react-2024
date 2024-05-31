import { create } from 'zustand'

interface UserLogin {
    userId: number;
    usuario: string;
    apellido: string;
    nombre: string;
    email: string;
    role: string;
    telefono: string;
    dependencia: any;
}

interface AuthState {
    token: string | null;
    usuario: UserLogin | null;
}

export const useAuthStore = create<AuthState>()(
    () => ({
        token: "Probando",
        usuario: null
    })
)




