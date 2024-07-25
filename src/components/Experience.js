import * as React from 'react';
import Button from '@mui/material/Button';
import '../components/ExpericienceWippie'
import ExpericienceWippie from '../components/ExpericienceWippie';
import { useState } from 'react';


const Experience = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDataFromChild = (data) => {
    setOpen(data);
  };

  return (
    <section id="#experience">
      <div className="container" >
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="white-color text-uppercase">Mi Experiencia</h3>
              <p className="text-uppercase small">
                Desarollador Full Stack basado en Argentina
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb">
            <div className="feature-box-1 box-shadow-lg">
{/*               <div className="icon">
                <i className="icon-desktop" />
              </div> */}
                <div className="experience_title_job">Wippie</div>

              <img src="/img/wippie.png" 
                alt="wippie_logo" />
              <div className="feature-content">
                <div className="experience_intro_job">2023 - hasta la actualida</div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Button sx={{
                    marginTop: '10px',
                    backgroundColor: 'transparent',
                    color: 'white',
                    border: '1px white solid',
                    '&:hover': {
                      backgroundColor: '#d9832e',
                      color: 'white',
                      border: '1px white solid',
                    }
                  }} variant="outlined" onClick={handleClickOpen}>
                    leer más
                  </Button>
                </div>
                <ExpericienceWippie open={open} onOpen={handleDataFromChild}/>
              </div>
            </div>
          </div>
          {/* / */}
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb">
            <div className="feature-box-1 box-shadow-lg">
{/*               <div className="icon">
                <i className="icon-pricetags" />
              </div> */}
              <div className="experience_title_job">Grupo Agni</div>
              <div className='grupo_agni_img'>
                <img src="/img/grupo_agni.png" 
                  alt="wippie_logo" />
                </div>
              <div className="feature-content">
              <div className="experience_intro_job">2021 - 2023</div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Button sx={{
                    marginTop: '10px',
                    backgroundColor: 'transparent',
                    color: 'white',
                    border: '1px white solid',
                    '&:hover': {
                      backgroundColor: '#d9832e',
                      color: 'white',
                      border: '1px white solid',
                    }
                  }} variant="outlined" onClick={handleClickOpen}>
                    leer más
                  </Button>
                </div>
                <ExpericienceWippie open={open} onOpen={handleDataFromChild}/>
              </div>
            </div>
          </div>
          {/* / */}
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb">
            <div className="feature-box-1 box-shadow-lg">
{/*               <div className="icon">
                <i className="icon-chat" />
              </div> */}
              <div className="experience_title_job">Arte y parte</div>
              <img src="/img/arte_y_parte.png" 
                alt="wippie_logo" className="experience_logo_job" />
              <div className="feature-content">
                <div className="experience_intro_job">2021</div>
                  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Button sx={{
                      marginTop: '10px',
                      backgroundColor: 'transparent',
                      color: 'white',
                      border: '1px white solid',
                      '&:hover': {
                        backgroundColor: '#d9832e',
                        color: 'white',
                        border: '1px white solid',
                      }
                    }} variant="outlined" onClick={handleClickOpen}>
                      leer más
                    </Button>
                  </div>
                  <ExpericienceWippie open={open} onOpen={handleDataFromChild}/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
