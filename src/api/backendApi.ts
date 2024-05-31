import axios from 'axios'

// Configuraciones de AXIOS
export const backendApi = axios.create({
    baseURL: 'http://localhost:3000/api/',
});

// Configuraciones de interceptores
// backendApi.interceptors.request.use( (config: any) => {

//     config.headers = {
//       ...config.headers,
//       'Authorization': `bearer ${localStorage.getItem('token')}`,
//       'userLogin': localStorage.getItem('userLogin')
//     }
  
//     return config;
  
// });