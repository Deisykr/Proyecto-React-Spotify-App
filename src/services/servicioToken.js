export async function generarToken(){
    const client_id="client_id=99cfbfcca17344f6bd21d01835a3fda3"
    const client_secret="client_secret=0002ef5d82d6490bb0e3a13cfd5997c8"
    const grant_type="grant_type=client_credentials"

    let dataEnvio=grant_type+"&"+client_secret+"&"+client_id

    const URL="https://accounts.spotify.com/api/token"

    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:dataEnvio
    }

    let respuesta=await fetch(URL,PETICION)

    let token=await respuesta.json()
    
    let tokenDefinitivo=token.token_type+" "+token.access_token

    return(tokenDefinitivo)
}