import { backendApi } from "@/api";
import { useUsuariosStore } from "@/stores/auth/usuarios.store"
import { toast } from "sonner";


export const useUsuarios = () => {

  const {

    // Propiedades
    isLoading,
    usuario,
    usuarios,

    // Metodos
    setLoading,
    setUsuario,
    setUsuarios

  } = useUsuariosStore();

  const getUsuario = async (id: string) => {

    try {
      const { data } = await backendApi.get(`/usuarios/${id}`);
      setUsuario(data.usuario);
    } catch (error: any) {
      toast.error(error.response.data.message);
      setLoading(false)
    }
  }

  const getAllUsuarios = async () => {
    try {
      const { data } = await backendApi.get('/usuarios');
      setUsuarios(data.usuarios);
    } catch (error: any) {
      toast.error(error.response.data.message);
      setLoading(false)
    }
  }

  const actualizarPassword = async (id: string, password: string) => {

    // Verificacion de datos
    if (!id || !password) return toast.error('Debe completar los datos');

    setLoading(true);

    try {
      await backendApi.patch(`/usuarios/${id}`, { password, activo: true });
      setLoading(false);
      toast.success('Contraseña actualizada correctamente');
    } catch (error: any) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  }

  return {

    // Propiedades
    isLoading,
    usuario,
    usuarios,

    // Metodos
    getUsuario,
    getAllUsuarios,
    actualizarPassword

  }

}