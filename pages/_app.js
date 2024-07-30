import Preloader from "@/src/layouts/Preloader";
import "@/styles/globals.css";
import "@/styles/footer.css";
import { Fragment, useEffect, useState } from "react";
import "../public/css/backgroundDinamic.css";
import "../public/css/carousel.css";
import "../public/css/style.css";
import "../public/css/experience.css";
import "../public/css/presentacion.css";
import "../public/css/tecnologias.css";
import "../public/css/hearthstone.scss";
import "../public/css/contact.css";
import "@/styles/swiper/css/style.css";
import "../public/static/style/master.css";
import "../src/backgroundDinamic";
import TypingAnimation from "@/src/components/TypingAnimation";

export default function App({ Component, pageProps }) {

  return (
    <>
      <Fragment>
        {/* <TypingAnimation /> */}
        <div id="large-header" className="large-header">
          <canvas id="demo-canvas"></canvas>
          <Component {...pageProps} />
        </div>
      </Fragment>
    </>
  );
}
