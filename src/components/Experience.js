import * as React from 'react';
import ExpericienceArteYParte from './ExpericienceArteYparte';
import ExpericienceGrupoAgni from './ExpericienceGrupoAgni';
import ExpericienceWippie from './ExpericienceWippie';
/* import { useState } from 'react'; */

const Experience = ({ t }) => {

  return (
    <section id="#experience">
      <div className="container" style={{ height: "100%"}}>
        <div className="row sm-m-25px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="white-color text-uppercase">{t('global.experience')}</h3>
              <p className="text-uppercase small">{t('global.subtitle')}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center experience_main">
          <div className="col-lg-12 m-30px-t m-15px-b experience_box">
              <ExpericienceArteYParte t={t} /> 
              <ExpericienceGrupoAgni t={t} /> 
              <ExpericienceWippie t={t} /> 
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
