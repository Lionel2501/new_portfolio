import { Button, ButtonGroup } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import LanguageDetector from 'i18next-browser-languagedetector';

const ButtonLenguage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const detectLanguage = () => {
      const language = i18n.language; // Obtiene el idioma actual de i18n

      if (language == 'en' || language == 'fr' || language == 'es') {
        console.log(language);
        handleLanguageChange(toString(language)); // Cambia el idioma si hay uno
      } else {
        const browserLanguage = navigator.language || navigator.userLanguage; // Obtiene el idioma del navegador
        const partes = browserLanguage.split('-');
        let _browserLanguage = partes[0];
        console.log(_browserLanguage);
        handleLanguageChange(toString(_browserLanguage)); // Cambia el idioma al del navegador
      }
    };

    detectLanguage();
  }, [i18n]);

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <ButtonGroup className='button_lenguage'>
      <Button style={{ border: '0px' }}><img width='50px' src='img/Spain.png' onClick={() => handleLanguageChange('es')}/></Button>
      <Button style={{ border: '0px' }}><img width='50px' src='img/United_Kingdom.png' onClick={() => handleLanguageChange('en')}/></Button>
      <Button style={{ border: '0px' }}><img width='50px' src='img/France.png' onClick={() => handleLanguageChange('fr')}/></Button>
    </ButtonGroup>
  );
};

export default ButtonLenguage;

