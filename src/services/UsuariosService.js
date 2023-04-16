
import { axiosConfig } from "../configuration/axiosConfig"

const getUsuarios =(estado)=>{
    return axiosConfig.get('usuarios?estado=' +estado, {
     headers: {
         'Content-Type': 'aplication/json'
     }
    })
 }
 // crear usuario
const createUsuario = (data = {}) => {
     return axiosConfig.post('usuarios', data, {
         headers: {
             'Content-Type': 'application/json'
         }
     })
 }
 

 
 // Editar usuario 

 const editarUsuario = (usuarioId, data) => {
    return axiosConfig.put(`usuarios/${usuarioId}`, data, {
     headers: {
        'Content-type': 'application/json'
     }
    });
  }
  // eleminar

  const borrarUsuario = (usuarioId) => {
    return axiosConfig.delete(`usuarios/${usuarioId}`, {}, {
     headers: {
        'Content-type': 'application/json'
     }
    });
  }
 
 export {
    getUsuarios,
    createUsuario,
    editarUsuario,
    borrarUsuario
 }