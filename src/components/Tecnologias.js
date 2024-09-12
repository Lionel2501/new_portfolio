import TecnologiaDialog from "@/src/components/TecnologiaDialog";
import { useState } from 'react';
import TypeIt from 'typeit-react';


const Tecnologias = () => {
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
              <h3 className="white-color text-uppercase">Tecnologias</h3>
              <p className="text-uppercase small">
                Desarollador Full Stack basado en Argentina
              </p>
            </div>
            <div className="col-md-12 d-flex justify-content-center">
              <div className="col-md-10 tecnologia_intro ">
                <p className="tecnologia_intro_text">Ya sea en la facultad, por curiosidad o de manera profesional, 
                  he tenido la oportunidad de trabajar con distintas tecnologías de desarrollo. A continuación, pueden acceder a más información haciendo click sobre cada una.
                </p>
              </div>
            </div>
            <div className="col-md-12 tecnologias_box" >
              <TecnologiaDialog open={open} onOpen={handleDataFromChild} index={index}/>
          </div>
          </div>
        </div>
      </section>
    );
  };

  export default Tecnologias;