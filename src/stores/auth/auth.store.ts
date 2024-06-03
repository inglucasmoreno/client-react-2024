import { create } from 'zustand';
import { devtools, persist  } from 'zustand/middleware';
import { IUserLogin } from '@/interface/userLogin.interface';

type StatusAuthType = 'checking' | 'not-authenticated' | 'authenticated';

interface AuthState {
    
    // Propiedades
    isLoading: boolean;
    status: StatusAuthType;
    token: string | null;
    usuario: IUserLogin | null;

    // Metodos
    setLoading: (loadingState: boolean) => void;
    login: (dataLogin: any) => void;
    logout: (dataLogout: any) => void;

}

export const useAuthStore = create<AuthState>()(
    persist(
        devtools(
            (set) => ({
            
                token: null,
                usuario: null,
                isLoading: false,
                status: 'checking',
                
                setLoading: (loadingState: boolean) => set({ 
                    isLoading: loadingState,
                }),

                login: ({ token, usuario }) => set({ 
                    token,
                    usuario,
                    isLoading: false,
                    status: 'authenticated',
                }),

                logout: () => set({ 
                    token: null,
                    usuario: null,
                    isLoading: false,
                    status: 'authenticated',
                }),
            
            })
        ), { name: 'auth-store' }
    )
)




