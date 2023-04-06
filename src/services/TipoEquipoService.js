import { axiosConfig } from "../configuration/axiosConfig"

const getTipoEquipos =(estado)=>{
   return axiosConfig.get('tiposequipos?estado=' +estado, {
    headers: {
        'Content-Type': 'aplication/json'
    }
   })
}

 const createTipoEquipo =()=>{
     // fALTA IMPLEMENTARLO 


 }

export {
    getTipoEquipos,
    createTipoEquipo
}