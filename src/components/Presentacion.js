import TypingAnimation from "@/src/components/TypingAnimation";

const Presentacion = () => {
    return (
        <section className="sectionContainer">
            <h6>Bienvenidos !</h6>
            <h1>Me llamó Lionel</h1>
            <h2>
              Soy apasionado <TypingAnimation />
            </h2>
            <p>
              The namics of how users interact with interactive elements
              within a user interface flow chart based 
            </p>
            <div className="btn-bar go-to">
              <a className="m-btn m-btn-theme" href="#work">
                Mis Prácticas
              </a>
              <a className="m-btn m-btn-t-theme" href="#contactus">
                Contacto
              </a>
            </div>
  {/*           <div className="go-to go-to-next">
              <a href="#experience">
              <span />
              </a>
              </div> */}
        </section>
    );
  };
  export default Presentacion;
  