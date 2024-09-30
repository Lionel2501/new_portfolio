import TecnologiaDialog from "@/src/components/TecnologiaDialog";
import { useState } from 'react';

const Tecnologias = ({ t }) => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(null);

    const handleClickOpen = (_index) => {
      setOpen(true);
      setIndex(_index)
    };
  
    const handleDataFromChild = (data) => {
      setOpen(data);
    };


    return (
      <section>
        <div className="container" style={{ height: "100%"}} >
          <div className="container_carousel">
            <div className="carousel_main">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="carousel__face" onClick={() => handleClickOpen(i)}>
                  <span></span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-12">
            <div className="section-title" >
              <h3 className="white-color text-uppercase">{t('global.tecnologies')}</h3>
              <p className="text-uppercase small">{t('global.subtitle')}</p>
            </div>
            <div className="col-md-12 d-flex justify-content-center">
              <div className="col-md-10 tecnologia_intro ">
                <p className="tecnologia_intro_text">{t('tecnologies.card_title')}</p>
              </div>
            </div>
            <div className="col-md-12 tecnologias_box" >
              <TecnologiaDialog open={open} onOpen={handleDataFromChild} index={index} t={t}/>
          </div>
          </div>
        </div>
      </section>
    );
  };

  export default Tecnologias;