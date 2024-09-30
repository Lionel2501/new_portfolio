import ExpericienceArteYParteDialog from './expericienceArteYParteDialog';
import Button from '@mui/material/Button';
import { useState } from 'react';

const ExpericienceArteYParte = ({ t }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDataFromChild = (data) => {
    setOpen(data);
  };

  return (
    <div className="col-sm-6 col-lg-4 m-15px-tb" style={{ height: "100%"}}>
      <div className="feature-box-1 box-shadow-lg experience_card">
{/*                 <div className="icon">
          <i className="icon-chat" />
        </div> */}
        {/* <div className="experience_title_job">Desarrollador Web</div> */}
        <div className='experience_img'>
          <img className='_arte_y_parte_img' src="/img/arte_y_parte.png" alt="wippie_logo" onClick={handleClickOpen} />
        </div>
        <div className="experience_title_job">{t("experience_arteyparte.title")}<br/><small>{t("experience_arteyparte.fecha")}</small></div>
        {/* <div className="experience_title_job">Arte y parte</div> */}
        <div>
          <Button
            className='experience_button'
            variant="outlined" 
            onClick={handleClickOpen}>
              {t("global.button")}
          </Button>
          <ExpericienceArteYParteDialog open={open} onOpen={handleDataFromChild} t={t} />
        </div>
      </div>
    </div>
  );
};

export default ExpericienceArteYParte;