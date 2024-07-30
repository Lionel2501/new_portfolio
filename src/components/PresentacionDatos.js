import { FaLinkedin, FaGithub, FaPhone, FaCity, FaEnvelope } from "react-icons/fa";

const PresentacionDatos = () => {
  
    return (
        <div className="presentacion-info media box-shadow">
            <div className="presentacion_datos_icons">
                <div className="icons_datos">
                    <div className="icon">
                        <FaCity />
                    </div>
                    <div className="media-body">
                        <p className="white-color font-alt">Tandil, Buenos Aires (GMT -3)</p>
                    </div>
                </div>
                <div className="icons_datos">
                    <div className="icon">
                        <FaPhone />
                    </div>
                    <div className="media-body">
                        <p className="white-color font-alt">0054 2494 646 055</p>
                    </div>
                </div>
                <div className="icons_datos">
                    <div className="icon">
                        <FaEnvelope />
                    </div>
                    <div className="media-body">
                        <p className="white-color font-alt">lionelcassar92@gmail.com</p>
                    </div>
                </div>
                <div className="icons_datos">
                    <div className="icon">
                        <FaLinkedin />
                    </div>
                    <div className="media-body">
                        <p className="white-color font-alt">https://www.linkedin.com/in/lionelcassar/</p>
                    </div>
                </div>
                <div className="icons_datos">
                    <div className="icon">
                        <FaGithub />
                    </div>
                    <div className="media-body">
                        <p className="white-color font-alt">https://github.com/Lionel2501</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PresentacionDatos;