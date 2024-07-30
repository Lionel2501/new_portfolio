import ExpericienceWippieDialog from './ExpericienceWippieDialog';
import Button from '@mui/material/Button';
import { useState } from 'react';

const ExpericienceWippie = () => {
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
          <i className="icon-desktop" />
        </div> */}
        <div className='experience_img'>
          <img className='wippie_img' src="/img/wippie.png" alt="wippie_logo" />
        </div>
        <div className="feature-content">
          <div className="experience_title_job">Wippie</div>
          <div className="experience_intro_job">2023 - hasta la actualida</div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Button 
            className='experience_button'
            variant="outlined" 
            onClick={handleClickOpen}>
              leer más
          </Button>
          <ExpericienceWippieDialog open={open} onOpen={handleDataFromChild}/>
        </div>
      </div>
    </div>
  );
};

export default ExpericienceWippie;