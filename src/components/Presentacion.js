import { FaLinkedin, FaGithub } from "react-icons/fa";

import PresentacionText from "./PresentacionText";
import Parallax from "./Parallax";

const Presentacion = ({ t }) => {

    return (
      <section >
        <div className="container" style={{ height: "100%"}}>
          {/* <div className="row full- p-10px-tb" style={{ height: "80%"}}> */}
            <div className="col-md-12 m-15px-tb">
              <div className="section-title">
                <h3 className="white-color text-uppercase">{t('global.presentation')}</h3>
                <p className="text-uppercase small">{t('global.subtitle')}</p>
              </div>
            </div>        
            
            <div className="col-md-12 parallax_body" id="parallax_main">
              <Parallax t={t} />
              {/* <div className="col-md-12 m-15px-tb">
                <div className="presentacion_title">
                  Soy un programador full stack apasionado por construir soluciones completas y eficientes.
                </div>
                <div className="presentacion_box">
                  <div className="col-md-6 presentacion_datos">
                    <PresentacionDatos /> 
                  </div> 
                  <div className="col-md-6 presentacion_text">
                    <PresentacionText /> 
                  </div>
                </div>  
              </div>*/}
            </div>
          </div>
        {/* </div>     */}
      </section>
    );
  };
  export default Presentacion;
  