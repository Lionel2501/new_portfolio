import { FaLinkedin, FaGithub } from "react-icons/fa";


const Presentacion = () => {
  
  const persona = new Object();
  persona.nombre = "Juan";
  persona.edad = 30;
  persona.profesion = "Desarrollador";
  persona.ciudad = "Tandil";
  
  console.log(persona);

    return (
      <section >
        <div className="container" style={{ height: "100%"}}>
          <div className="row full- p-10px-tb" style={{ height: "80%"}}>
            <div className="col-md-12">
              <div className="section-title">
                <h3 className="white-color text-uppercase">Presentación</h3>
                <p className="text-uppercase small">
                  Desarollador Full Stack basado en Argentina
                </p>
              </div>
            </div>
            <div className="col-md-12 presentacion_text">
              <p>Soy un programador full stack apasionado por construir soluciones completas y eficientes.</p>
{/*                 <div className="hero-text">
                  <div className="btn-bar go-to">
                    <a className="m-btn m-btn-theme" href="#experience">
                      Lionel Cassar
                    </a>
                    <a className="m-btn m-btn-t-theme" href="#contactus">
                      Dev Full Stack
                    </a>
                  </div> 
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                  <div className="social-icons">
                    <a href="https://linkedin.com/in/tu-usuario" target="_blank">
                      <FaLinkedin />
                    </a>
                    <a href="https://github.com/tu-usuario" target="_blank">
                      <FaGithub />
                    </a>
                  </div>
                </div> */}
            </div>
            <div className="col-md-12 presentacion_box">

              <div className="col-md-6">
                
              </div>
              <div className="col-md-6">
                <div className="presentacion_datos">
                  <div className="contact-info media box-shadow">
                    <div className="icon">
                      <i className="ti-location-pin" />
                    </div>
                    <div className="media-body">
                      <p className="white-color font-alt">Localida: Tandil, Buenos Aires, Argentina (GMT -3)</p>
                    </div>
                  </div>
                  <div className="contact-info media box-shadow">
                    <div className="icon">
                      <i className="ti-mobile" />
                    </div>
                    <div className="media-body">
                      <p className="white-color font-alt">Telefono: 0054 2494 646 055</p>
                    </div>
                  </div>
                  <div className="contact-info media box-shadow">
                    <div className="icon">
                      <i className="ti-email" />
                    </div>
                    <div className="media-body">
                      <p className="white-color font-alt">Email: lionelcassar92@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div> 
            </div> 
          </div>
        </div>    
      </section>
    );
  };
  export default Presentacion;
  