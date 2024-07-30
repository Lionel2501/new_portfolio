import ExpericienceArteYParteDialog from './expericienceArteYParteDialog';
import Button from '@mui/material/Button';
import { useState } from 'react';

const ExpericienceArteYParte = () => {
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
        <div className='experience_img'>
          <img className='_arte_y_parte_img' src="/img/arte_y_parte.png" alt="wippie_logo" />
        </div>
        <div>
          <div className="experience_title_job">Desarrollador Web en Arte y parte</div>
          <span className="experience_intro_job">2021</span>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Button
            className='experience_button'
            variant="outlined" 
            onClick={handleClickOpen}>
              leer más
          </Button>
          <ExpericienceArteYParteDialog open={open} onOpen={handleDataFromChild}/>
        </div>
      </div>
    </div>
  );
};

export default ExpericienceArteYParte;