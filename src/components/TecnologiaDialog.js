import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { List, ListItem, ListItemText, Divider } from '@mui/material';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const TecnologiaDialog = ({open, onOpen, index, t}) => {

  const [_open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    if (typeof onOpen === 'function') {
      onOpen(false);
    }
  };

  useEffect(() => {
    setOpen(open)
  }, [open]);

  const data = [
    {
      width: "330px",
      name: "Vue Js",
      type: "Front-End",
      img: "../img/vuejs_2.png",
      experiencia: "4",
      habilidades: [
        t("vuejs.habilidad_1"),
        t("vuejs.habilidad_2"),
        t("vuejs.habilidad_3"),
      ],
      opinion: "En 2021, utilicé Vue.js para desarrollar mi primer portafolio mientras buscaba mi primera experiencia laboral. Implementé Tailwind CSS para los estilos, lo que me permitió explorar y fortalecer mis habilidades en el desarrollo front-end a través de este proyecto."
    },
    {
      width: "200px",
      name: "Python",
      type: "Back-End",
      img: "../img/python_logo.png",
      experiencia: "4",
      habilidades: [
        t("python.habilidad_1"),
        t("python.habilidad_2"),
        t("python.habilidad_3"),
      ],
      opinion: t("python.opinion"),
      github: ""
    },
    {
      width: "200px",
      name: "Javascript",
      type: "Front-End",
      img: "../img/js_logo.png",
      experiencia: "4",
      habilidades: [
        t("javascript.habilidad_1"),
        t("javascript.habilidad_2"),
        t("javascript.habilidad_3"),
        t("javascript.habilidad_4"),
        t("javascript.habilidad_5"),
      ],
      opinion: t("javascript.opinion"),
    },
    {
      width: "150px",
      name: "PHP",
      type: "Back-End",
      img: "../img/php_logo.png",
      experiencia: "4",
      habilidades: [
        t("php.habilidad_1"),
        t("php.habilidad_2"),
        t("php.habilidad_3"),
        t("php.habilidad_4"),
        t("php.habilidad_5"),
        t("php.habilidad_6"),
      ],
      opinion: t("php.opinion"),
    },
    {
      width: "380px",
      name: "Laravel",
      type: "Back-End",
      img: "../img/laravel_logo.png",
      experiencia: "4",
      habilidades: [
        t("laravel.habilidad_1"),
        t("laravel.habilidad_2"),
        t("laravel.habilidad_3"),
        t("laravel.habilidad_4"),
        t("laravel.habilidad_5"),
        t("laravel.habilidad_6"),
      ],
      opinion: t("laravel.opinion"),
    },
    {
      width: "430px",
      name: "React",
      type: "Front-End",
      img: "../img/react_logo.png",
      experiencia: "4",
      habilidades: [
        t("react.habilidad_1"),
        t("react.habilidad_2"),
        t("react.habilidad_3"),
        t("react.habilidad_4"),
        t("react.habilidad_5"),
        t("react.habilidad_6"),
      ],
      opinion: t("react.opinion"),
    },
    {
      width: "220px",
      name: "MySql",
      type: "Back-End",
      img: "../img/mysql_logo.png",
      experiencia: "4",
      habilidades: [
        t("mysql.habilidad_1"),
        t("mysql.habilidad_2"),
        t("mysql.habilidad_3"),
      ],
      opinion: t("mysql.opinion"),
    },

    {
      width: "300px",
      name: "Mongo DB",
      type: "Back-End",
      img: "../img/mongo_db_logo.png",
      experiencia: "4",
      habilidades: [
        t("mongodb.habilidad_1"),
        t("mongodb.habilidad_2"),
        t("mongodb.habilidad_3"),
      ],
      opinion: t("mongodb.opinion"),
    },
    {
      width: "225px",
      name: "Git",
      type: "Back-End",
      img: "../img/rsz_github_logo.png",
      experiencia: "4",
      habilidades: [
        t("git.habilidad_1"),
        t("git.habilidad_2"),
        t("git.habilidad_3"),
      ],
      opinion: t("git.opinion"),
    },
  ]

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={_open}
    >
      <div className='d-flex justify-content-between'>
        <DialogTitle sx={{ m: 2, p: 0 }} id="customized-dialog-title">
          {data[index]?.name} <br></br><small>{data[index]?.type}</small>
        </DialogTitle>
        <img width={data[index]?.width} className='_arte_y_parte_img' src={data[index]?.img} alt="wippie_logo"/>
      </div>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Typography marginTop={1}><strong>{t("global.hability")}</strong> <br></br></Typography>
        <List>
          {
            data[index]?.habilidades?.map(x => {
              return (
                <ListItem sx={{ paddingY: 0 }}>
                  <ListItemText primary={x} />
                </ListItem>)
            })
          }
        </List>
        <Divider />
        <Typography marginTop={1}><strong>{t("global.note")}</strong></Typography>
        <List>
          <ListItem sx={{ paddingY: 0 }}>
            <ListItemText primary={data[index]?.opinion} />
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>{t("global.button_close")}</Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default TecnologiaDialog;