import React from 'react'
import NavBar from '../components/ui/NavBar'
import {Routes, Route} from 'react-router-dom'
import NotFund from '../components/ui/NotFund'
import TipoEquipos from '../components/TipoEquipos'
import Estados from '../components/Estados'
import Usuarios from '../components/Usuarios'
import Marcas from '../components/Marcas'
import Inventario from '../components/Inventario'
import Footer from '../components/ui/Footer'








export default function AppRouter() {
  return (
    <>
        <NavBar />
       
        
   <div className='container'>

   <Routes>
           <Route path='/' element={<TipoEquipos />} />
           <Route path= '/estados' element={<Estados/>}  />
           <Route path= '/usuarios' element={<Usuarios/>}  />
           <Route path= '/marcas' element={<Marcas/>}  />
           <Route path= '/inventario' element={<Inventario/>}  />
           <Route path='*' element={<NotFund/>}/>


        </Routes>

   </div>
 
<Footer>
    
</Footer>

        </>
  )
}


// path es  una propiedad 