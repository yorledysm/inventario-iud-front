import { axiosConfig } from "../configuration/axiosConfig"

// obtener datos 
const getTipoEquipos =(estado)=>{
   return axiosConfig.get('tiposequipos?estado=' +estado, {
    headers: {
        'Content-Type': 'aplication/json'
    }
   })
}



// crear tipo equipo
const createTipoEquipo = (data = {}) => {
    return axiosConfig.post('tiposequipos', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}



//editarTipoEquipo
  const editarTipoEquipo = (tipoId, data)=>{
    return axiosConfig.put(`tiposequipos/${tipoId}`, data,{
        headers:{
            'Content-type': 'application/json'
        }
    
  })
  }
  // eleminar

  const borrarTipoEquipo = (tipoId) => {
    return axiosConfig.delete(`tipoequipos/${tipoId}`, {}, {
     headers: {
        'Content-type': 'application/json'
     }
    });
  }


  


export {
    getTipoEquipos,
    createTipoEquipo,
    editarTipoEquipo,
    borrarTipoEquipo
}