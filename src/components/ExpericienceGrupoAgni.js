import ExpericienceGrupoAgniDialog from './expericienceGrupoAgniDialog';
import Button from '@mui/material/Button';
import { useState } from 'react';

const ExpericienceGrupoAgni = ({ t }) => {
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
        <div className='experience_img'>
          <img className='grupo_agni_img' src="/img/grupo_agni.png" onClick={handleClickOpen} />
        </div>
        <div className="experience_title_job">{t("experience_grupoagni.title")}<br/><small>{t("experience_grupoagni.date")}</small></div>
        <div>
          <Button 
            className='experience_button'
            variant="outlined" 
            onClick={handleClickOpen}>
              {t("global.button_read_more")}
          </Button>
          <ExpericienceGrupoAgniDialog open={open} onOpen={handleDataFromChild} t={t}/>
        </div>
      </div>
    </div>
  );
};

export default ExpericienceGrupoAgni;