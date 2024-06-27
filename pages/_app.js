import Preloader from "@/src/layouts/Preloader";
import "@/styles/globals.css";
import "@/styles/footer.css";
import { Fragment, useEffect, useState } from "react";
import "../public/css/backgroundDinamic.css"
import "../public/css/backgroundDinamic2.css"
import "../public/static/style/master.css"
import "../src/backgroundDinamic"
import "../src/backgroundDinamic2"

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    setTimeout(() => {
      setContent(true);
    }, 1000);
  }, []);

  return (
    <>
      <div id="large-header" className="large-header">
        <canvas id="demo-canvas"></canvas>
{/*           <h1 className="main-title">Bienvenidos
            <span className="thin">Three</span>
          </h1> */}
          <p className="main-title">Bienvenidos a mi Portfolio Digital
          </p>
          <h1 className="title">Me llamo Lionel, soy programador full-stack
          </h1>
      </div>

      <div id="large-header2" className="large-header2">
        <canvas id="demo-canvas2"></canvas>
        <h1 className="main-title">Tecnologias</h1>
        <div className="container_carousel">
            <div className="carousel_main">
              <div className="carousel__face"><span></span></div>
              <div className="carousel__face"><span></span></div>
              <div className="carousel__face"><span></span></div>
              <div className="carousel__face"><span></span></div>
              <div className="carousel__face"><span></span></div>
              <div className="carousel__face"><span></span></div>
              <div className="carousel__face"><span></span></div>
              <div className="carousel__face"><span></span></div>
              <div className="carousel__face"><span></span></div>
            </div>
          </div>
      </div>
      
{/*
      <main className="main-left">
        <section
          id="home"
          className="home-banner-01 bg-cover bg-center bg-no-repeat"
        >
          <div className="container">
            <div className="row full-screen align-items-center p-100px-tb">
              <div className="col-md-12">
                <div className="ht-text">
                  <h6>Bienvenidos !</h6>
                  <h1>Me llamó Lionel</h1>
                  <h2>
                    Soy apasionado 
                  </h2>
                  <p>
                    The namics of how users interact with interactive elements
                    within a user interface flow chart based on container
                    proportion.
                  </p>
                  <div className="btn-bar go-to">
                    <a className="m-btn m-btn-theme" href="#work">
                      Mis Prácticas
                    </a>
                    <a className="m-btn m-btn-t-theme" href="#contactus">
                      Contacto
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
*/}
       <Fragment>
          {loading && <Preloader />}
          {content && <Component {...pageProps} />}
      </Fragment> 
    </>
  );
}
