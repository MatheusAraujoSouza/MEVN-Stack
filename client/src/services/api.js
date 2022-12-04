import axios from 'axios'
const baseURL = "http://localhost:3000"

const apiPublic = axios.create({
    baseURL,
    timeout:10000
})


const apiProtected = axios.create({
    baseURL,
    timeout:10000,
    headers:{
        'authorization':'admin'+localStorage.token
    }
})

export{
    apiPublic,
    apiProtected


}