import TypeIt from 'typeit-react';
import React, { useState, useEffect } from 'react';

const PresentacionText = () => {
/*     const [localLoading, setLocalLoading] = useState(true);
    const [isTransparent, setIsTransparent] = useState(false);
    const [textHidden, setTextHidden] = useState(false);
  
    useEffect(() => {
      if (!localLoading) {
        setIsTransparent(true);
        setTimeout(() => {
          setTextHidden(true);
        }, 1000); // Ajusta el tiempo si es necesario
      }
    }, [localLoading]);
  
    const handleSetLoading = (value) => {
      setLocalLoading(value);
    }; */

    return (
        <div style={{ height: '100%'}}>
            <div className=" presentacion-info media box-shadow matrix-body">
                  <TypeIt
                      options={{ speed: 110 }}
                      /* className={`matrix-text ${textHidden ? 'hidden' : ''}`} */
                      className={'matrix-text'}
                      getBeforeInit={(instance) => {
                      instance.type("Bienvenidos !").pause(500)
                          .type("<br>").pause(750)
                          .type("m").pause(350)
                          .delete(1).pause(500)
                          .type("M").pause(250)
                          .type("e llamó Lionel,").pause(750)
                          .type("<br>Soy Desarrollador Full Stack")
                          .type("<br>")
                          .pause(1000)
                          /* .exec(() => {
                              handleSetLoading(false);  // Cambia el estado de carga a false después de la animación
                          }); */
                      return instance;
                      }}
                  />
            </div>
        </div>
    );
}

export default PresentacionText;