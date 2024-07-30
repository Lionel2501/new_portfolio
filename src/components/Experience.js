import * as React from 'react';
import ExpericienceWippie from './ExpericienceWippie';
import ExpericienceGrupoAgni from './ExpericienceGrupoAgni';
import ExpericienceArteYParte from './ExpericienceArteYParte';
/* import { useState } from 'react'; */

const Experience = () => {

  return (
    <section id="#experience">
      <div className="container" style={{ height: "100%"}}>
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="white-color text-uppercase">Experiencia</h3>
              <p className="text-uppercase small">
                Desarollador Full Stack basado en Argentina
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center contact_box">
          <div className="col-lg-12 m-15px-tb experience_box">
              <ExpericienceArteYParte /> 
              <ExpericienceGrupoAgni /> 
              <ExpericienceWippie /> 
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
