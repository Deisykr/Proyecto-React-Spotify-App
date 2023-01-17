//Receta para consumir un api con react
import { generarToken } from "./servicioToken"

export async function servicioAlbum(){
    let token=await generarToken()

    //1.PA DONDE VAS Y A QUE VAS 
    //ESCRIBIR LA URL DEL SERVICIO DEL API 
    const URL="https://api.spotify.com/v1/artists/1yIESehTCkR9hPmGFKxuV5/albums?market=US&limit=10"

    //2.QUE OPERACION VAS A HACER EN LA BASE DE DATOS 
    //CONFIGURAR LA PETICION DE ENVIO HACIA EL SERVIDOR }
    const PETICION={
        method:"GET",
        headers:{Authorization:token}
    }

//3.NOS VAMOS AL RESTAURANTE 
//CONSUMIMOS EL API
let respuesta=await fetch(URL,PETICION)
let albums=await respuesta.json()

console.log(albums);

return albums
}