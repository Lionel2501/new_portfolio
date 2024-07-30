import ExpericienceGrupoAgniDialog from './expericienceGrupoAgniDialog';
import Button from '@mui/material/Button';
import { useState } from 'react';

const ExpericienceGrupoAgni = () => {
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
  {/*               <div className="icon">
          <i className="icon-pricetags" />
        </div> */}
        <div className='experience_img'>
          <img className='grupo_agni_img' src="/img/grupo_agni.png" />
        </div>
        <div>
          <div className="experience_title_job">Grupo Agni</div>
          <div className="experience_intro_job">2021 - 2023</div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Button 
            className='experience_button'
            variant="outlined" 
            onClick={handleClickOpen}>
              leer más
          </Button>
          <ExpericienceGrupoAgniDialog open={open} onOpen={handleDataFromChild}/>
        </div>
      </div>
    </div>
  );
};

export default ExpericienceGrupoAgni;