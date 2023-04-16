import { axiosConfig } from "../configuration/axiosConfig"

// obtener datos 
const getMarcas =(estado)=>{
   return axiosConfig.get('marcas?estado=' +estado, {
    headers: {
        'Content-Type': 'aplication/json'
    }
   })
}


//createMarca
// crear tipo equipo
const createMarca = (data = {}) => {
    return axiosConfig.post('marcas', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
//editarMarca
const editarMarca = (marcaId, data) => {
    return axiosConfig.put(`marcas/${marcaId}`, data, {
     headers: {
        'Content-type': 'application/json'
     }
    });
  }
  // eleminar

  const borrarMarca = (marcaId) => {
    return axiosConfig.delete(`marcas/${marcaId}`, {}, {
     headers: {
        'Content-type': 'application/json'
     }
    });
  }

export {
    getMarcas,
    createMarca, 
    editarMarca,
    borrarMarca
}