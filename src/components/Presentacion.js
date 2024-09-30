import Parallax from "./Parallax";

const Presentacion = ({ t }) => {

    return (
      <section >
        <div className="container" style={{ height: "100%"}}>
            <div className="col-md-12 m-15px-tb">
              <div className="section-title">
                <h3 className="white-color text-uppercase">{t('global.presentation')}</h3>
                <p className="text-uppercase small">{t('global.subtitle')}</p>
              </div>
            </div>        
            
            <div className="col-md-12 parallax_body" id="parallax_main">
              <Parallax t={t} />
            </div>
          </div>
      </section>
    );
  };
  export default Presentacion;
  