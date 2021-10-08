import axios from "axios"

export const getFotos = ()=> {
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(resp=>{
        return resp.data
    })
}

export const postFotos = ()=> {

}

export const deleteFotos = (id)=> {
    axios.delete(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then(resp=> alert('Borrado con exito'))
}