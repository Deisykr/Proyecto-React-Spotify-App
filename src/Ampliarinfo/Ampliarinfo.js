import './Ampliarinfo.css'
import { useLocation } from "react-router-dom"
export function Ampliarinfo(){

    let datosrecibidos=useLocation()

    let producto=datosrecibidos.state.productoSeleccionado
    console.log(producto)

    return(
        <>

        <div className="container">

            <div className="row my-5">
                <div className="col-12 col-md-5">
                    <img src={producto.foto} alt="foto" className="img-fluid w-100"></img>
                </div>

                <div className="col-12 col-md-4 border p-3">
                    <h2 className="fw-bold">{producto.nombre}</h2>
                    <h1 className="mt-3 display-1">${producto.precio}<span className='descuento'>20% off</span>
                     </h1>
                     <br/>
                     <span className='badge text-bg-primary'>Descuento del dia</span>
                     <p>Hasta 48 Cuotas</p>
                     <img src="https://firebasestorage.googleapis.com/v0/b/spotifyjdg-eff06.appspot.com/o/american-express.png?alt=media&token=04dd7914-d3b2-4b7a-b598-019c656285f6" alt="" className="img-fluid">

                     </img>

                     <img src="https://firebasestorage.googleapis.com/v0/b/spotifyjdg-eff06.appspot.com/o/visa.png?alt=media&token=d0e0f0d2-a35b-46ad-b300-602aa0d2468b" alt="" className="img fluid ms-2">
                     </img>
                     <br/>
                     <i class="bi bi-truck mt-5 fs-1 text-success"></i>
                     <p className='text-success fw-bold'>Envio Gratis a Nivel Nacional</p>
                     <p>Conoce los Tiempos y las Formas de Envio</p>

                     <i class="bi bi-clockwise mt-5 fs-1 text success"></i>
                     <p className='text-success fw-bold'>Devolucion Gratis</p>
                     <p>30 Dias para Reembolso</p>
                     <h5 className="pb-2 text-center">{producto.descripcion}</h5>
                </div>
    
            </div>
        </div>
        
        </>
    ) 
   
}