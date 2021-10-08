import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { deleteFotos, getFotos } from '../../helpers/crudFotos/crudFotos'
import './styleFotos.css'

const Fotos = () => {
    const [fotos, setFotos] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(resp=> setFotos(resp.data))
    }, [fotos])

    const deleteF = (id)=> {
        deleteFotos(id)
    }

    return (
            fotos.map(item=>(
                <div className="cont-fotos" key={item.id}>
                    <div className="cont-person">
                        <img src={item.thumbnailUrl} alt="" width="100px" />
                        <h3 className="title">{item.title}</h3>
                    </div>
                    <div className="cont-image">
                        <img src={item.url} alt={item.title} width="400px" />
                    </div>
                    <div className="cont-likes">
                        <button onClick={()=> deleteF(item.id)}>Borrar</button>
                    </div>
                </div>
            ))
    )
}

export default Fotos
