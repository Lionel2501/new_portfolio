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

const ExpericienceArteYParteDialog = ({open, onOpen, t}) => {

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
      <DialogTitle sx={{ m: 2, p:0 }} id="customized-dialog-title">
        Desarrollador Web / Arte y Parte <br></br><small>junio 2021 - enero 2022</small>
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
          <strong>Puesto:</strong> Responsable de la implementación del contenido de la sección
          de los cursos para el sitio <i>www.arteyparte.net</i>.
        </Typography>
        <Divider />
        <Typography marginTop={1}><strong>Objetivos:</strong> <br></br></Typography>
        <List>
          <ListItem sx={{ paddingY: 0 }}>
            <ListItemText margin={0} primary="Actualizar el contenido del sistema." />
          </ListItem>
          <ListItem sx={{ paddingY: 0 }}>
            <ListItemText margin={0} primary="Actualizar el diseño del sitio." />
          </ListItem>
        </List>
        <Divider />
        <Typography marginBottom={2} marginTop={1}><strong>Tecnologias:</strong> <br></br></Typography>
        <Stack direction="row" spacing={2} marginBottom={2} marginTop={1} sx={{ flexWrap: 'wrap', rowGap: '10px'}}>
          <Chip size='small' label="HTML" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip size='small' label="CSS" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip size='small' label="Bootstrap" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
        </Stack>
        <Divider />
        <Typography marginTop={1}><strong>Tareas realizadas:</strong> <br></br></Typography>
        <List>
          <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
            <ListItemText primary="Contribuí al diseño, desarrollo y mantenimiento de una plataforma de cursos en línea, asegurando una experiencia de usuario fluida y accesible para los estudiantes." />
          </ListItem>
          <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
            <ListItemText primary="Me encargué de la actualización periódica del contenido de los cursos, integrando nuevos materiales y recursos didácticos para mantener la relevancia y calidad de la oferta educativa." />
          </ListItem>
          <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
            <ListItemText primary=" Implementé los estilos y la identidad visual diseñada por el equipo de diseño, garantizando la coherencia estética y funcional en la interfaz de la plataforma." />
          </ListItem>
          <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
            <ListItemText primary="Participé activamente en sesiones colaborativas con equipos multidisciplinarios, aportando ideas y soluciones para mejorar tanto el desarrollo técnico como la experiencia del usuario en la plataforma." />
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

export default ExpericienceArteYParteDialog;