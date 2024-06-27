import { useEffect } from "react";
import { utils } from "../layouts/utils";
import Carousel from "./Carousel";
import TypingAnimation from "@/src/components/TypingAnimation";


const Home = () => {
/*   useEffect(() => {
    utils.activeSkillProgress();
  }, []); */

  return (
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
        <a href="experience">
            <span />
        </a>
        </div>
    </section>
  );
};
export default Home;