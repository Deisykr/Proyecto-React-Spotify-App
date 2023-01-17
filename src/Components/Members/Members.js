export function Members() {

    let titulo="integrantes de la banda"

    let integrantes=[


        {
            foto:"https://firebasestorage.googleapis.com/v0/b/album-44177.appspot.com/o/ulises_rescate.png?alt=media&token=fd75a609-ad3b-4eaf-98f1-508ab29e3401",
            nombre:"Ulices (vocalista)",
            history:"Ulises Miguel Eyherabide (San Nicolás de los Arroyos, 1 de febrero de 1967-29 de julio de 2022) fue un cantante, músico, compositor, diseñador gráfico, arquitecto conocido por ser el líder, fundador y vocalista principal de la banda de rock cristiano, Rescate.",

        },
        {
            foto:"https://firebasestorage.googleapis.com/v0/b/album-44177.appspot.com/o/integrante_guitarrista.jpg?alt=media&token=e24a1e2a-07d1-4e68-a513-494cede082e7",
            nombre:"Marcelo Barrera (guitarra)",
            history:"Marcelo Alejandro Barrera (Rosario, 26 de abril de 1966) es un músico argentino, conocido por ser el guitarrista de la banda argentina Rescate."
        },
        {
            foto:"https://firebasestorage.googleapis.com/v0/b/album-44177.appspot.com/o/biografia3.jpg?alt=media&token=afdfe8ab-e971-4670-b4a3-6cfd7c837ea5",
            nombre:"Marcelo Tega (bajo y segunda voz)",
            history:"Marcelo Tega (n. Rosario, 1 de mayo de 1967) es el bajista de la banda Rescate"
        },
        {
            foto:"https://firebasestorage.googleapis.com/v0/b/album-44177.appspot.com/o/ulices_concierto.jpg?alt=media&token=7b578bcd-9154-4dd9-8fc2-0aa764a73358",
            nombre:"",
            history:"Russel Hobbs (Nueva York, 3 de junio de 1975) es un músico ficticio estadounidense y miembro de la banda virtual Gorillaz. Expresado por Remi Kabaka Jr. Fue creado por Damon Albarn y Jamie Hewlett."

        }
    ]

    return(
        <>
     <h1 classNameName="center">INTEGRANTES DE LA BANDA</h1>

<div className="container">
  <div className="row row-cols-1 row-cols-md-7 g-5">
    {integrantes.map(function (integrante) {
      return (
        <>

          <div className="col-12 col-md-6 ">
            <h1>{integrante.nombre}</h1>
            <img className="imagen" src={integrante.foto}></img>
          </div>


          <div className="col-12 col-md-6 ">
            <h1 classNameName="center">Rescate</h1>
            <h3 className="fw-bold">{integrante.biografia}</h3>
          </div>






        </>
      );
    })}
  </div>
</div>
</>


)


}
