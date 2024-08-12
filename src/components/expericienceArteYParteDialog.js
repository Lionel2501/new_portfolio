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

const ExpericienceArteYParteDialog = ({open, onOpen}) => {

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
      <DialogTitle margin={1} sx={{ m: 0, p: 2 }} id="customized-dialog-title">
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
        <Typography marginY={1} style={{ textAlign: "justify" }}>
          <strong>Puesto:</strong> <br></br>
          Responsable de la implementación del contenido de la sección
          de los cursos para el sitio <i>www.arteyparte.net</i>.
        </Typography>
        <Divider />
        <Typography marginY={1}><strong>Objetivos:</strong> <br></br></Typography>
        <List>
          <ListItem>
            <ListItemText margin={0} primary="Actualizar el contenido del sistema." />
          </ListItem>
          <ListItem>
            <ListItemText margin={0} primary="Actualizar el diseño del sitio." />
          </ListItem>
        </List>
        <Divider />
        <Typography marginY={1}><strong>Tecnologias:</strong> <br></br></Typography>
        <Stack direction="row" spacing={2} margin={1} sx={{ flexWrap: 'wrap', rowGap: '10px'}}>
          <Chip size='small' label="HTML" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip size='small' label="CSS" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip size='small' label="Bootstrap" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
        </Stack>
        <Divider />
        <Typography marginY={1}><strong>Tareas realizadas:</strong> <br></br></Typography>
        <List>
          <ListItem>
            <ListItemText primary="Plataforma de cursos." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Actualización del contenido de los cursos." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Implementación del estilo diseñado por el diseñador." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Participación en sesiones colaborativas Participación en sesiones colaborativas." />
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