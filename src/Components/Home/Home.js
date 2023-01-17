import './Home.css';

// Components
import { Footer } from '../../shared/Footer/Footer';

export function Home() {
    return (
        <>
        <section>
                <div className="banner"></div>
            </section>
            <section>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-12 col-md-8">
                            <h2>Rescate</h2>
                            <p>
                            RESCATE (acrónimo de Reyes En Servicio de Cristo Ante Tiempos Extremos) 
                            Es una banda argentina de rock cristiano que se formó en el año 1987 en la ciudad de San Nicolás de los Arroyos
                            (provincia de Buenos Aires). Con ocho discos en su haber, cada uno con un estilo totalmente diferente, 
                            han sabido ganarse la fama y el reconocimiento nacional. Es considerada como una de las 
                            primera bandas de rock evangélico de la Argentina con éxito masivo y una de las bandas más influyentes 
                            Han cosechado nominaciones en Premios Arpa y Premios Gardel
                            </p>
                            <figure>
                                <img className="img-fluid w-100" src='https://firebasestorage.googleapis.com/v0/b/album-44177.appspot.com/o/bandacompleta_foto.jpg?alt=media&token=6b2eb417-6c09-4aba-b380-86b3fc0db8f0' alt='' />
                            </figure>
                        </div>
                        <div className="col-12 col-md-4 bg-dark text-white">
                            <h2 className="text-center">Conciertos</h2>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Colombia</p>
                                    <p className="m-0">Diciembre 4</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Argentina</p>
                                    <p className="m-0">Abril 21</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Nicaragua</p>
                                    <p className="m-0">Junio 8</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Venezuela</p>
                                    <p className="m-0">Agosto 29</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Peru</p>
                                    <p className="m-0">Octubre 10</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Bolivia</p>
                                    <p className="m-0">Noviembre 15</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Chile</p>
                                    <p className="m-0">Enero 30</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Brazil</p>
                                    <p className="m-0">Febrero 29</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Salvador</p>
                                    <p className="m-0">Abril 03</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Argentina</p>
                                    <p className="m-0">Mayo 31</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1>
                                noticias
                            </h1>
                            <hr/>
                        </div>
                    </div>
    
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <img src='https://firebasestorage.googleapis.com/v0/b/album-44177.appspot.com/o/bandasinulices_2.jpg?alt=media&token=17ecbbeb-7fbd-4517-9ce0-76d2ef675436' alt='ImageLeft' className="img-fluid w-100" />
                            <p>Gira por centro américa, desde el 4 de diciembre</p>
                        </div>
                        <div className="col-12 col-md-4">
                            <img src='https://firebasestorage.googleapis.com/v0/b/album-44177.appspot.com/o/Rescate_Sinf%C3%B3nico.jpg?alt=media&token=f537b186-f209-4b35-8767-a4061b70e151' alt='ImageCenter' className="img-fluid w-100" />
                            <p>Banda sinfonica de Argentina tocará con la banda el 21 de Abril en el estadio del River </p>
                        </div><div className="col-12 col-md-4">
                            <img src='https://firebasestorage.googleapis.com/v0/b/album-44177.appspot.com/o/banda_acompa%C3%B1ada.jpg?alt=media&token=c01af638-0ce7-4fba-8d5e-1a2190e65104' alt='ImageRight' className="img-fluid w-100" />
                            <p>Grabación en vivo del nuevo albúm discográfico, desde Nicaragua</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )

}