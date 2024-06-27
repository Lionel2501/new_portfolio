import Preloader from "@/src/layouts/Preloader";
import "@/styles/globals.css";
import "@/styles/footer.css";
import { Fragment, useEffect, useState } from "react";
//import "../public/css/3dcaroussel.css"
import "../public/css/backgroundDinamic.css"
import "../src/backgroundDinamic"

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
      <div id="large-header" class="large-header">
        <canvas id="demo-canvas"></canvas>
          <h1 class="main-title">Connectttt 
            <span class="thin">Three</span>
          </h1>
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
      <Fragment>
        {loading && <Preloader />}
        {content && <Component {...pageProps} />}
      </Fragment>
    </>
  );
}
