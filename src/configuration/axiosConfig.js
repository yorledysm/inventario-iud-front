import axios from 'axios'

 export const axiosConfig =axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:5000/api'  
})

// la base URL donde vamos hacer las peticiones (Postmas)

