import About from "@/src/components/About";
import Blog from "@/src/components/Blog";
import Contact from "@/src/components/Contact";
import Skills from "@/src/components/Skills";
import Testiminails from "@/src/components/Testiminails";
import Experience from "@/src/components/Experience";
import { utils } from "@/src/layouts/utils";
import { Fragment, useEffect, useState } from "react";

import TypingAnimation from "@/src/components/TypingAnimation";
import Footer from "@/src/layouts/Footer";
import dynamic from "next/dynamic";

const Work = dynamic(() => import("@/src/components/Work"), {
  ssr: false,
});

const scrollToBottom = () => {
  window.location.href = '#experience';
}

const Index1 = () => {
  useEffect(() => {
    utils.scrollToActiveNav();
    setTimeout(() => {
      scrollToBottom();
    }, 5000);
  }, []);

  const [toggle, setToggle] = useState(false);

  return (
    <Fragment>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <a className="logo-text">
              Lionel
            </a>
          </div>
          <button className="toggler-menu" onClick={() => setToggle(!toggle)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <header
        className={`header-left ${toggle ? "menu-open menu-open-desk" : ""}`}
        id="navbar-collapse-toggle"
      >
        <div className="navbar-brand">
          <a className="logo-text">
            Lionel
          </a>
        </div>
        <ul className="nav nav-ul">
          <li>
            <a className="nav-link" href="#home">
              <i className="fas fa-house-damage" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#experience">
              <i className="fas fa-concierge-bell" />
              <span>Experiencía</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#skills">
              <i className="fas fa-concierge-bell" />
              <span>Tecnologías</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#about">
              <i className="far fa-address-card" />
              <span>About Me</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#work">
              <i className="fas fa-briefcase" />
              <span>Portfolio</span>
            </a>
          </li>
{/*           <li>
            <a className="nav-link" href="#blog">
              <i className="fas fa-blog" />
              <span>Blog</span>
            </a>
          </li> */}
{/*           <li>
            <a className="nav-link" href="#contactus">
              <i className="fas fa-id-card-alt" />
              <span>Contact</span>
            </a>
          </li> */}
        </ul>
      </header>

      <main className="main-left">
        {/* Home Banner */}
        <section
          id="home"
          className="home-banner-01 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(static/img/home-banner.jpg)" }}
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
          <div className="go-to go-to-next">
            <a href="#experience">
              <span />
            </a>
          </div>
        </section>
        <Experience />
        <Skills />
        <About />
        <Work />
        {/* <Testiminails /> */}
        {/* <Blog /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </Fragment>
  );
};
export default Index1;
