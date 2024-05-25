const About = () => {
  const handleDownload = () => {
    // Puedes realizar alguna operación aquí si es necesario
    const link = document.createElement('a');
    link.href = '../../public/demo/files/cv_lionel_cassar_programador.pdf';
    link.download = 'lionel_cassar_cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="section gray-bg">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">Datos personales</h3>
              <p className="text-uppercase small">
                Desarollador Full Stack
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
            {/* 
          <div className="col-lg-5 m-15px-tb">
            <div className="about-me-img box-shadow">
              <img src="demo/img/img_presentatio_test.png" alt="image" />
              <div className="nav social-icon">
                <a href="https://www.linkedin.com/in/lionelcassar/" target="_blank">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div> 
          </div>
            */}
          {/* <div className="col-lg-7 m-15px-tb"> */}
            <div className="about-me">
              <h4>Lionel Cassar</h4>
              <h6>
                Desarollador <span className="theme-color">Full Stack</span> basado en <span className="theme-color">Argentina</span>
              </h6>
              <p>
                Programador con más de 3 años de experiencia en desarrollo de software, 
                especializado en tecnologías web front-end y back-end. 
                Apasionado por crear sistemas robustos y eficientes que mejoran 
                la experiencia del usuario.
              </p>
              <div className="row about-list">
                <div className="col-md-6">
                  <div className="media">
                    <label>Edad</label>
                    <p>32 años</p>
                  </div>
                  <div className="media">
                    <label>Ciudad</label>
                    <p>Tandil, Buenos Aires</p>
                  </div>
                  <div className="media">
                    <label>E-mail</label>
                    <p>lionelcassar92@gmail.com</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="media">
                    <label>WhatsApp</label>
                    <p>+54-2494-646-055</p>
                  </div>
                  <div className="media">
                    <label>LinkedIn</label>
                    <p>linkedin.com/in/lionelcassar</p>
                  </div>
                  <div className="media">
                    <label>GitHub</label>
                    <p>github.com/Lionel2501</p>
                  </div>
                </div>
              </div>
              <div className="btn-bar">
                <a className="m-btn m-btn-theme" onClick={handleDownload}>
                  Descargar CV
                </a>
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};
export default About;
