import axios from 'axios'

// Configuraciones de AXIOS
export const backendApi = axios.create({
    baseURL: 'http://localhost:3000/api/',
});

backendApi.interceptors.request.use( (config: any) => {
    
    const dataAuthString =   localStorage.getItem('auth-store');
    
    let token: string = '';
    // let userLogin: string = '';
    
    if(dataAuthString){
        const dataStorage = JSON.parse(dataAuthString);
        token = dataStorage?.state?.token ? dataStorage.state.token : ''; 
        // userLogin = dataStorage?.state?.usuario?.userId ? dataStorage.state.usuario.userId : '';
    }

    config.headers = {
        ...config.headers,
        'Authorization': `bearer ${token}`,
        // 'userLogin': localStorage.getItem(`${userLogin}`)
    }

    return config

})


// Configuraciones de interceptores
// backendApi.interceptors.request.use( (config: any) => {

//     config.headers = {
//       ...config.headers,
//       'Authorization': `bearer ${localStorage.getItem('token')}`,
//       'userLogin': localStorage.getItem('userLogin')
//     }
  
//     return config;
  
// });