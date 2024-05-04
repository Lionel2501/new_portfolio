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

  return (
    <section id="experience" className="section gray-bg">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">My Experience</h3>
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
              <div className="icon">
                <i className="icon-desktop" />
              </div>
              <div className="feature-content">
                <h5>Wippie</h5>
                <p>
                  I design and develop Experience for customers of all sizes,
                  specializing in creating stylish, modern websites.
                </p>
                <Button variant="outlined" onClick={handleClickOpen}>
                  más info
                </Button>
                <ExpericienceWippie data={open}/>
              </div>
            </div>
          </div>
          {/* / */}
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb">
            <div className="feature-box-1 box-shadow-lg">
              <div className="icon">
                <i className="icon-pricetags" />
              </div>
              <div className="feature-content">
                <h5>Grupo Agni</h5>
                <p>
                  I design and develop Experience for customers of all sizes,
                  specializing in creating stylish, modern websites.
                </p>
              </div>
            </div>
          </div>
          {/* / */}
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb">
            <div className="feature-box-1 box-shadow-lg">
              <div className="icon">
                <i className="icon-chat" />
              </div>
              <div className="feature-content">
                <h5>Arte y parte</h5>
                <p>
                  I design and develop Experience for customers of all sizes,
                  specializing in creating stylish, modern websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
