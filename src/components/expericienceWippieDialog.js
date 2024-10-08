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

const ExpericienceWippieDialog = ({open, onOpen}) => {

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

  return (
    <BootstrapDialog
      minWidth={'800px'}
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={_open}
    >
      <DialogTitle sx={{ m: 2, p: 0 }} id="customized-dialog-title">
      Desarrollador Full Stack / Wippie <br></br><small>septiembre 2023 - a la actualidad.</small>
      </DialogTitle>
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
        <Typography marginBottom={1} style={{ textAlign: "justify" }}>
          <strong>Puesto:</strong> <br></br>
          Responsable del desarrolló y mantenimiento de para la Dirección de Informática y Comunicaciones  de Mendoza.
        </Typography>
        <Divider />
        <Typography marginTop={1}><strong>Objetivos:</strong> <br></br></Typography>
        <List>
          <ListItem sx={{ paddingY: 0 }}>
            <ListItemText primary="Renderización de datos en el cliente." />
          </ListItem>
          <ListItem sx={{ paddingY: 0 }}>
            <ListItemText primary="Gestionar solicitudes en el servidor." />
          </ListItem>
          <ListItem sx={{ paddingY: 0 }}>
            <ListItemText primary="Actualizar el diseño del sitio." />
          </ListItem>
        </List>
        <Divider />
        <Typography marginBottom={2} marginTop={1}><strong>Tecnologias:</strong> <br></br></Typography>
        <Stack direction="row" spacing={2} marginBottom={2} marginTop={1} sx={{ flexWrap: 'wrap', rowGap: '10px', flexFlow: 'start'}}>
          <Chip size='small' label="HTML" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip size='small' label="CSS" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip size='small' label="Bootstrap" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip size='small' label="JQuery" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip size='small' label="PHP" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip size='small' label="Kumbia PHP" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip size='small' label="MySql" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip size='small' label="GitLab" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip size='small' label="WinSCP" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
        </Stack>
        <Divider />
        <Typography marginTop={1}><strong>Tareas realizadas:</strong> <br></br></Typography>
        <List>
          <ListItem sx={{ paddingY: 0 }}>
            <ListItemText primary="Gestioné y supervisé el despliegue de aplicaciones en entornos de producción, asegurando la correcta configuración y funcionamiento del sistema, así como la mitigación de riesgos durante la transición." />
          </ListItem>
          <ListItem sx={{ paddingY: 0 }}>
            <ListItemText primary="Realicé tareas de mantenimiento preventivo y correctivo en sistemas productivos, garantizando su estabilidad, rendimiento y disponibilidad para los usuarios finales." />
          </ListItem>
          <ListItem sx={{ paddingY: 0 }}>
            <ListItemText primary="Diseñé, administré y optimicé bases de datos relacionales, asegurando la integridad, consistencia y rendimiento en la gestión de grandes volúmenes de datos transaccionales." />
          </ListItem>
          <ListItem sx={{ paddingY: 0 }}>
            <ListItemText primary="Implementé la conexión segura de servidores mediante SSL y su integración con la plataforma X-Road, asegurando la protección de datos sensibles y la interoperabilidad entre diferentes sistemas." />
          </ListItem>
          <ListItem sx={{ paddingY: 0 }}>
            <ListItemText primary="Diseñé y estructuré tablas de bases de datos relacionales, optimizando la organización y el acceso a los datos para mejorar la eficiencia de las consultas y la integridad referencial." />
          </ListItem>
          <ListItem sx={{ paddingY: 0 }}>
            <ListItemText primary="Desarrollé e implementé procesos para la ingesta y procesamiento eficiente de archivos CSV de gran tamaño, asegurando la correcta importación y manejo de datos en sistemas de alto rendimiento." />
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cerrar
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default ExpericienceWippieDialog;