import Preloader from "@/src/layouts/Preloader";
import "@/styles/globals.css";
import "@/styles/footer.css";
import { Fragment, useEffect, useState } from "react";
import "../public/css/backgroundDinamic.css"
import "../public/css/carousel.css"
import "../public/css/style.css"
import "@/styles/swiper/css/style.css";
import "../public/static/style/master.css"
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
      <div id="large-header" className="large-header">
        <canvas id="demo-canvas"></canvas>
          {/* <CarouselComponent /> */}
          {/* <main className="main-left"> */}
          <Fragment>
              {loading && <Preloader />}
              {content && <Component {...pageProps} />}
          </Fragment> 
        {/* </main> */}
      </div>
    </>
  );
}
