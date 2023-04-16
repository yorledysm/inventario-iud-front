
import { axiosConfig } from "../configuration/axiosConfig"

const getEstados =(estado)=>{
  return axiosConfig.get('estados?estado=' +estado, {
   headers: {
       'Content-Type': 'aplication/json'
   }
  })
}

// crear estado
const createEstado = (data = {}) => {
  return axiosConfig.post('estados', data, {
      headers: {
          'Content-Type': 'application/json'
      }
  })
}



const editarEstado = (estadoId, data) => {
  return axiosConfig.put(`estados/${estadoId}`, data, {
   headers: {
      'Content-type': 'application/json'
   }
  });
}
// eleminar

const borrarEstado = (estadoId) => {
  return axiosConfig.delete(`estados/${estadoId}`, {}, {
   headers: {
      'Content-type': 'application/json'
   }
  });
}
export {
  getEstados,
  createEstado,
  editarEstado,
  borrarEstado
}