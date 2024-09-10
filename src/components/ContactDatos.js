import { FaLinkedin, FaGithub, FaPhone, FaCity, FaEnvelope, FaDownload } from "react-icons/fa";

const ContactDatos = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/files/cv_lionel_cassar_programador.pdf'; // Ruta pública al archivo
        link.download = 'lionel_cassar_cv.pdf';  // Nombre con el que se descargará
        link.click();
      };
      

    return (
        <div className="contacto-info media contact_datos_icons">
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
            <a href="https://www.linkedin.com/in/lionelcassar/" target="_blank">
                <div className="icons_datos">
                    <div className="icon">
                        <FaLinkedin />
                    </div>
                    <div className="media-body">
                        <p className="white-color font-alt">https://www.linkedin.com/in/lionelcassar/</p>
                    </div>
                </div>
            </a>
            <a href="https://github.com/Lionel2501" target="_blank">
                <div className="icons_datos">
                    <div className="icon">
                        <FaGithub />
                    </div>
                    <div className="media-body">
                        <p className="white-color font-alt">https://github.com/Lionel2501</p>
                    </div>
                </div>
            </a>
            <div className="icons_datos icon_download" onClick={() => handleDownload()}>
                <div className="icon">
                    <FaDownload />
                </div>
                <div className="media-body">
                    <p className="white-color font-alt">Descargar CV</p>
                </div>
            </div>
        </div>
    );
}

export default ContactDatos;