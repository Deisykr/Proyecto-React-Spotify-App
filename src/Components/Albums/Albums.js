import { servicioAlbum } from "../../services/servicioAlbum"
import { useState,useEffect } from "react"

export function Albums() {

    //Estamos usando el usestate para almacenar  la repuesta
    // del api de  forma global
    const[albums,setAlbums]=useState(null)
    const[estadocarga,setEstadoCarga]=useState(true)

    //Usando el useEffect para evitar el consumo
    //del api una sola vez
    useEffect(function(){
        servicioAlbum().then(function(respuesta){
            setAlbums(respuesta)
            setEstadoCarga(false)
        })    
    },[])

    //render del componente
    if (estadocarga==true){

        return(
            <>
            <h2>Estamos Cargando los Albums</h2>
            </>
        )
    }else{
        return(
            <>
            <h2>Albums de la banda </h2>
            {
                albums.items.map(function(album, id){
                    return(
                       <div key={id}>
                            <img src={album.images[0].url}></img>
                            <h1>{album.name}</h1>
                            <p>Total Canciones: {album.total_tracks}</p>
                       </div>
                    )
                })
            }
            </>
        )

    }
}