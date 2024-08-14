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

const ExpericienceGrupoAgniDialog = ({open, onOpen}) => {

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
        Desarrollador Full Stack / Grupo Agni <br></br><small>septiembre 2021 - agosto 2023.</small>
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
          <strong>Puesto:</strong> Miembro del equipo de desarrollo de un CRM cloud para un cliente en EE.UU.
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
        </List>
        <Divider />
        <Typography marginBottom={2} marginTop={1}><strong>Tecnologias:</strong> <br></br></Typography>
        <Stack direction="row" spacing={2} marginBottom={2} marginTop={1} sx={{ flexWrap: 'wrap', rowGap: '10px'}}>
          <Chip label="HTML" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip label="CSS" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip label="Material UI" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip label="Javascript" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip label="React" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip label="Next JS" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip label="PHP" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip label="Laravel" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip label="Docker" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip label="Mongo DB" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip label="AWS" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip label="GitHub" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
        </Stack>
        <Divider />
        <Typography marginTop={1}><strong>Tareas realizadas:</strong> <br></br></Typography>
        <List>
          <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
            <ListItemText primary="Implementé y optimicé bases de datos NoSQL, asegurando un rendimiento robusto y escalable para aplicaciones que manejan grandes volúmenes de datos no estructurados." />
          </ListItem>
          <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
            <ListItemText primary="Automatizé la carga y almacenamiento de archivos CSV en sistemas de gestión de datos, garantizando la integridad y accesibilidad de los datos para su posterior análisis." />
          </ListItem>
          <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
            <ListItemText primary="Integré y gestioné la implementación de coordenadas geográficas en Google Maps, mejorando la localización y visualización de datos espaciales en aplicaciones web." />
          </ListItem>
          <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
            <ListItemText primary="Desarrollé funcionalidades para calcular y visualizar rutas óptimas en Google Maps, optimizando el tiempo de desplazamiento y los recursos en aplicaciones logísticas." />
          </ListItem>
          <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
            <ListItemText primary="Implementé filtros de búsqueda dinámicos que permitieron a los usuarios refinar los resultados en tiempo real, mejorando la experiencia de búsqueda en aplicaciones web." />
          </ListItem>
          <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
            <ListItemText primary="Desarrollé funcionalidades para calcular y visualizar rutas óptimas en Google Maps, optimizando el tiempo de desplazamiento y los recursos en aplicaciones logísticas." />
          </ListItem>
          <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
            <ListItemText primary="Desarrollé y optimicé métodos en segundo plano (background processes) para manejar tareas intensivas en procesamiento sin afectar el rendimiento de la interfaz de usuario." />
          </ListItem>
          <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
            <ListItemText primary=" Desarrollé y configuré la generación automática de documentos PDF descargables desde aplicaciones web, asegurando la correcta representación de datos y la facilidad de acceso para los usuarios." />
          </ListItem>
          <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
            <ListItemText primary="Implementé la gestión de estados globales en aplicaciones, permitiendo una sincronización eficiente y consistente de datos entre diferentes componentes y vistas." />
          </ListItem>
          <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
            <ListItemText primary="Desarrollé servicios de respuesta eficientes para manejar solicitudes del lado del servidor, mejorando la velocidad y fiabilidad de las aplicaciones web." />
          </ListItem>
          <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
            <ListItemText primary="Implementé y mantuve plataformas de e-commerce, integrando funcionalidades clave como la gestión de productos, pagos y seguimientos de órdenes, optimizando la experiencia de compra en línea." />
          </ListItem>
          <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
            <ListItemText primary="Implementé la gestión de estados del lado del cliente, utilizando frameworks modernos para asegurar la coherencia y eficiencia en la manipulación de datos en la interfaz de usuario." />
          </ListItem>
          <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
            <ListItemText primary="Diseñé y desarrollé componentes reutilizables en aplicaciones web, promoviendo la eficiencia y consistencia en la implementación de interfaces de usuario." />
          </ListItem>
          <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
            <ListItemText primary="Implementé y personalicé el diseño visual de interfaces utilizando Material UI, asegurando una experiencia de usuario moderna y coherente con las directrices de diseño establecidas." />
          </ListItem>
          <ListItem sx={{ paddingY: 0 }}>
            <ListItemText primary="Diseñé e implementé sistemas ETL (Extracción, Transformación y Carga) para la integración de datos desde diversas fuentes, asegurando la precisión y consistencia en el manejo de grandes volúmenes de información." />
          </ListItem>
          <ListItem sx={{ paddingY: 0 }}>
            <ListItemText primary="Realicé tareas de refactorización y optimización de código para mejorar la eficiencia, legibilidad y mantenibilidad de aplicaciones, reduciendo tiempos de carga y mejorando el rendimiento general." />
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

export default ExpericienceGrupoAgniDialog;