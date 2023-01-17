import { Footer } from "../shared/Footer/Footer";
import { useNavigate } from "react-router-dom";

export function Mercancia() {

//Activamos la navegacion entre componentes cuando se de un evento
let navegante=useNavigate()

//que hago cuando se de el evento
    function detectarEvento(productoSeleccionado){

        navegante("/tienda",{
            state:{productoSeleccionado}
        })
        
    }

  let titulo = "Productos de la banda...";

  let producto = [
    {
      nombre: "Camiseta...Por las calles",
      foto: "https://firebasestorage.googleapis.com/v0/b/album-44177.appspot.com/o/negra_por_las%20calles.jfif?alt=media&token=b8dcd314-fa2a-4cf9-98ac-740e6e4d0320",
      precio: 20,
      descripcion:"Las pisadas del Maestro por el mundo entero ",
    },

    {
      nombre: "Camiseta... Indudablemente tú",
      foto: "https://firebasestorage.googleapis.com/v0/b/album-44177.appspot.com/o/INDU_CAMI.jfif?alt=media&token=d89b0421-e71f-49f7-bfe3-52ac1f6ed92c",
      precio: 20,
      descripcion:"LLeva los mejores momentos de nuestro nuevo albúm",
      
    },

    {
      nombre: "Camiseta... Corazón pesebre",
      foto: "https://firebasestorage.googleapis.com/v0/b/album-44177.appspot.com/o/CORAZON.jfif?alt=media&token=bc408eb6-c0ec-4c2f-9d58-c06d198f6366",
      precio: 10,
      descripcion:"Recordando que Jesús ha nacido en nuestro corazón",
    },
    {
      nombre: "Camiseta... Yo no abandono",
      foto: "https://firebasestorage.googleapis.com/v0/b/album-44177.appspot.com/o/YONOABANDONO2.jpg?alt=media&token=84034db4-e882-4fad-a61f-be6421f78218",
      precio: 55,
      descripcion:"Con esta camiseta contribuyes a que más niños en Kenia accedan a una alimentación digna",
    },
    {
      nombre: "Camiseta... de aquí no me voy",
      foto: "https://firebasestorage.googleapis.com/v0/b/album-44177.appspot.com/o/CAMISETA_DEAQUINO%20ME%20VOY.jfif?alt=media&token=a399a5ec-2b07-46a6-bfd2-bf808ca71d32",
      precio: 70,
      descripcion:"Un bello reucuerdo de que estamos en el tiempo y lugar correcto",
    },
    {
      nombre: "Gorra logo rescate",
      foto: "https://firebasestorage.googleapis.com/v0/b/album-44177.appspot.com/o/GORRARESCATE.jpg?alt=media&token=a4873132-7ca1-40b0-9945-3af27c8b872e",
      precio: 70,
      descripcion:"Estpas destinado a ser libre",
    },
  ];

  return (
    <>
      <h1>{titulo}</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">


          {producto.map(function (producto,id) {
            return (
              <div key={id}>
                <div className="col">
                  <div className="card h-100 shadow">

                    
                    <img src={producto.foto}alt="foto"className="h-100 img-fluid w-100"></img>

                    <button className="btn btn-dark mx-5 my-3" onClick={
                        function(){
                            detectarEvento(producto)
                        }}>Ampliar</button>



                    <hr />
                    <h3 className="pb-2 text-center">{producto.nombre}</h3>
                    <h4 className="pb-1 text-center">Precio: {producto.precio} </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
}
