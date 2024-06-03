import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface UsuariosState {

  // Propiedades
  isLoading: boolean;
  usuario: any;
  usuarios: any[];

  // Metodos
  setLoading: (loadingState: boolean) => void;
  setUsuario: (usuario: any) => void;
  setUsuarios: (usuario: any) => void;

}

export const useUsuariosStore = create<UsuariosState>()(
  devtools(
    (set) => ({

      isLoading: false,
      usuario: null,
      usuarios: [],

      setLoading: (loadingState: boolean) => set({
        isLoading: loadingState,
      }),

      setUsuario: (usuario: any) => set({
        isLoading: false,
        usuario
      }),

      setUsuarios: (usuarios: any[]) => set({
        isLoading: false,
        usuarios
      })
      
    })
  ),
)



