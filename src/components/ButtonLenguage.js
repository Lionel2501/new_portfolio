import { Button, ButtonGroup } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ButtonLenguage = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <ButtonGroup className='button_lenguage'>
      <Button onClick={() => handleLanguageChange('es')}>Es</Button>
      <Button onClick={() => handleLanguageChange('en')}>En</Button>
      <Button onClick={() => handleLanguageChange('fr')}>Fr</Button>
    </ButtonGroup>
  );
};

export default ButtonLenguage;

