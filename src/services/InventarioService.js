import { axiosConfig } from "../configuration/axiosConfig"

// obtener datos 
const getInventarios =(estado)=>{
   return axiosConfig.get('inventarios?estado=' +estado, {
    headers: {
        'Content-Type': 'aplication/json'
    }
   })
}



// crear tipo equipo
const createInventario = (data = {}) => {
    return axiosConfig.post('inventarios', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


const editarIventario = (tipoId, data)=>{
    return axiosConfig.put(`inventarios/${tipoId}`, data,{
        headers:{
            'Content-type': 'application/json'
        }
    
  })
  }
  // eleminar
/** 
 * 
 const borrarInventario = (tipoId) => {
    return axiosConfig.delete(`inventarios/${tipoId}`, {}, {
     headers: {
        'Content-type': 'application/json'
     }
    });
  }


*/
 


export {
    getInventarios,createInventario, editarIventario
}