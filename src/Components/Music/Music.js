import{servicioCancionesTop} from "../../services/servicioCanciones"
import { useState,useEffect } from "react"

export function Music() { 

    //Estamos usando el usestate para almacenar  la repuesta
    // del api de  forma global
    const[canciones,setCanciones]=useState(null)
    const[estadocarga,setEstadoCarga]=useState(true)

    //Usando el useEffect para evitar el consumo
    //del api una sola vez
    useEffect(function(){
        servicioCancionesTop().then(function(respuesta){
            setCanciones(respuesta)
            setEstadoCarga(false)
        })    
    },[])

    //render del componente
    if (estadocarga==true){

        return(
            <>
            <h2>Estamos Cargando la Canciones</h2>
            </>
        )

    }else{
        return(
            <>
            <h2>Canciones de la banda </h2>
            {
                canciones.tracks.map(function(cancion, id){
                    return(
                       <div key={id}>
                            <h1>{cancion.name}</h1>
                            <audio controls src={cancion.preview_url}></audio>
                            <img src={cancion.album.images[0].url}></img>
                       </div>
                    )
                })
            }
            </>
        )

    }



}