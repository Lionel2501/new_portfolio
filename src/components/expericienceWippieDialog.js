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
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
      Desarrollador Full Stack / Wippie
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
        <Typography style={{ textAlign: "justify" }}>
          <strong>Puesto:</strong> <br></br>
          septiembre 2023 a la actualidad.
        </Typography>
        <Divider />
        <Typography marginY={1}><strong>Objetivos:</strong> <br></br></Typography>
        <List>
          <ListItem>
            <ListItemText margin={0} primary="Actualizar el contenido del sistema desde el proveedor de alojamiento web SiteGround." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Optimizar el rendimiento del sistema." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Implementar medidas de seguridad adicionales." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Realizar copias de seguridad periódicas." />
          </ListItem>
        </List>
        <Divider />
        <Typography marginY={1}><strong>Tecnologias:</strong> <br></br></Typography>
        <Stack direction="row" spacing={2} marginY={1} sx={{ flexWrap: 'wrap', rowGap: '10px', flexFlow: 'start'}}>
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
        <Typography marginY={1}><strong>Tareas realizadas:</strong> <br></br></Typography>
        <List>
          <ListItem>
            <ListItemText primary="Responsable del despliegue en producción." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Mantenimiento del sistema." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Bases de datos relacionales." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Conexión de servidor SSL con X-Road." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Diseño de tablas." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Procesamiento de archivos CSV alto volumen." />
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