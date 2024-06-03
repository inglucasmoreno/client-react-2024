import { backendApi } from "@/api"


export const useInit = () => {

  const inicialization = async () => {

    const { data } = await backendApi.get('/inicializacion');
    
  }

  return {

  }

}