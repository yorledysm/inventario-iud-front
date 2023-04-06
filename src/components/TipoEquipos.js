
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { getTipoEquipos} from '../services/TipoEquipoService'
import Footer from './ui/Footer'
import NavBar from './ui/NavBar'

export default function TipoEquipos({title}) {

   const [tipoEquipos, setTipoEquipos]= useState([])

    const listTipoEquipos = async ()=>{
      try{
        const {data}=await getTipoEquipos(true)
        console.log(data)
        setTipoEquipos(data)
      }catch(e)
      {
        console.log(e)
      }
      
      

    }

    useEffect(()=>{
        listTipoEquipos()

    }, [])
  return (
   <>
    <NavBar/>
    <div className='table-responsive'>
    <table className="table table-bordered border-primary">
  
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Estado</th>
      <th scope="col">Fecha de creación</th>
      <th scope="col">Fecha actualización</th>

    </tr>
  </thead>
  <tbody>
    {
    tipoEquipos.map((tipoEquipo, index)=>{
      return(
        <tr>
        <th scope="row">{index+1}</th>
        <td>{tipoEquipo.nombre}</td>
        <td>{tipoEquipo.estado? 'Activo': 'Inativo'}</td>
        <td>{dayjs(tipoEquipo.fechaCreacion).format('YYYY-MM-DD')}</td>
        <td>{dayjs(tipoEquipo.fechaActualizacion).format('YYYY-MM-DD')}</td>
       
     </tr>
      )
    })
    }
    
    
    
  </tbody>
</table>
      
      
       </div>
    
     <Footer />

   </>


  )
}

// el useEfecto ejecutrara el metodo cuando cargue  la pagina 
