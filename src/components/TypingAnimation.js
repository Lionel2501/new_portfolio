import React, { useState, useEffect } from 'react';
import TypeIt from 'typeit-react';

const TypingComponent = () => {
  const [localLoading, setLocalLoading] = useState(true);
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
  };
  
  return (
    <div className={`matrix-body ${isTransparent ? 'transparent' : ''}`}>
      <TypeIt
        options={{ speed: 90 }}
        className={`matrix-text ${textHidden ? 'hidden' : ''}`}
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
            .exec(() => {
              handleSetLoading(false);  // Cambia el estado de carga a false después de la animación
            });
          return instance;
        }}
      />
    </div>
  );
};

export default TypingComponent;
