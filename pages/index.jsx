import About from "@/src/components/About";
import Skills from "@/src/components/Skills";
import Experience from "@/src/components/Experience";
import { Fragment, useEffect, useState } from "react";

import TypingAnimation from "@/src/components/TypingAnimation";
import Footer from "@/src/layouts/Footer";
import dynamic from "next/dynamic";

const Work = dynamic(() => import("@/src/components/Work"), {
  ssr: false,
});

const scrollToBottom = () => {
  if (typeof window !== "undefined") { // Verificar si estamos en el lado del cliente
    window.location.href = '#experience';
  }
}

const Index1 = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Fragment>
      <main className="main-left">
        {/* Home Banner */}
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
                    Soy apasionado <TypingAnimation />
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
{/*           <div className="go-to go-to-next">
            <a href="#experience">
              <span />
            </a>
          </div> */}
        </section>
        <Experience />
        {/* <Skills /> */}
        <About />
        {/* <Work /> */}
        {/* <Testiminails /> */}
        {/* <Blog /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </Fragment>
  );
};
export default Index1;
