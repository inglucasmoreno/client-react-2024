import { backendApi } from "@/api";
import { IDataLogin } from "@/interface/dataLogin.interface";
import { useAuthStore } from "@/stores/auth/auth.store";
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner"

export const useAuth = () => {

  const {

    // Propiedades
    isLoading,
    status,
    usuario,

    // Metodos
    setLoading,
    login: loginStore,
    logout: logoutStore,

  } = useAuthStore();

  const navigate = useNavigate();

  // Ingreso al sistema
  const login = async (dataLogin: IDataLogin) => {

    // Verificar que los campos no vengan vacios
    if (dataLogin.username.trim() === '' || dataLogin.password.trim() === '') return;

    setLoading(true);

    // Comunicacion con el backend - Axios
    try {
      const { data } = await backendApi.post("/auth/login", dataLogin);
      loginStore(data);
      toast("Bienvenido al portal");
      navigate('/home');
    } catch (error: any) {
      toast.error(error.response.data.message);
      logoutStore({});
    }

  }

  // Cerrar sesion
  const logout = () => {
    logoutStore({});
    toast.success("Sesion finalizada correctamente");
    navigate('/auth/login');
  }

  // Verificacion de sesion activa
  const checkAuthStore = async () => {

    const dataStorageString = localStorage.getItem('auth-store');

    let token: string | null = null;

    // Convertir token a objeto
    if (dataStorageString) {
      const dataStorage = JSON.parse(dataStorageString);
      token = dataStorage.state.token;
    }

    // El token no existe
    // Cerrar sesion - Logout
    if (!token) return logoutStore({});

    // El token existe
    try {
      const { data } = await backendApi.get("profile");
      loginStore(data);
    } catch (error) {
      logoutStore({})
    }

  }

  return ({

    // Propiedad
    isLoading,
    status,
    usuario,

    // Metodos
    login,
    logout,
    checkAuthStore,
    setLoading

  })

}
