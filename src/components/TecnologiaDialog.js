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

const TecnologiaDialog = ({open, onOpen, index}) => {

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
      width: "300px",
      name: "Vue Js",
      type: "Front-End",
      img: "../img/vuejs_2.png",
      experiencia: "4",
      habilidades: [
        "Enrutamiento con Vue Router",
        "Integración con Tailwind CSS",
        "Comunicación con API usando Axios"
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
        "Uso de BeautifulSoup para web scraping",
        "Automatización de tareas",
        "Gestión de datos y almacenamiento"
      ],
      opinion: "Exploré Python por curiosidad, ya que es un lenguaje que me interesa aprender más a fondo. Desarrollé un script utilizando la librería BeautifulSoup para extraer datos de páginas web y almacenarlos en mi base de datos, lo que me permitió automatizar tareas de scraping y gestión de información.",
      github: ""
    },
    {
      width: "200px",
      name: "Javascript",
      type: "Front-End",
      img: "../img/js_logo.png",
      experiencia: "4",
      habilidades: [
        "Manipulación del DOM",
        "Manejo de Eventos",
        "Programación Asíncrona",
        "Uso de Frameworks y Librerías",
        "Exploración de Node.js"
      ],
      opinion: "Adquirí una sólida comprensión de JavaScript durante mis estudios universitarios y lo apliqué en mi experiencia profesional para el desarrollo de front-end. Además, realicé experimentos con Node.js para explorar el desarrollo en el back-end, ampliando así mi conocimiento en la construcción de aplicaciones completas."
    },
    {
      width: "150px",
      name: "PHP",
      type: "Back-End",
      img: "../img/php_logo.png",
      experiencia: "4",
      habilidades: [
        "Programación Orientada a Objetos (OOP)",
        "Sintaxis y Estructura de PHP",
        "Manejo de Formularios",
        "Conexión con Bases de Datos",
        "Autenticación y Autorización",
        "Manejo de Peticiones HTTP"
      ],
      opinion: "Adquirí una sólida comprensión de PHP durante mis estudios universitarios, donde aprendí la sintaxis del lenguaje y desarrollé diversas funcionalidades, incluyendo sistemas de autenticación, manejo de peticiones, controladores, así como la implementación de clases y objetos."
    },
    {
      width: "350px",
      name: "Laravel",
      type: "Back-End",
      img: "../img/laravel_logo.png",
      experiencia: "4",
      habilidades: [
        "Rutas y Controladores",
        "Eloquent ORM",
        "Middleware y Autenticación",
        "Integración con MongoDB",
        "Micro servicios",
        "Optimización y Escalabilidad"
      ],
      opinion: "Después de mi primer año de estudios universitarios, profundicé en Laravel para seguir perfeccionando mis habilidades en PHP. A lo largo de dos años de experiencia trabajando con Laravel, he implementado microservicios y realizado peticiones a MongoDB utilizando el paquete Jenssegers. Esta experiencia me ha proporcionado una sólida comprensión del framework y sus capacidades."
    },
    {
      width: "400px",
      name: "React",
      type: "Front-End",
      img: "../img/react_logo.png",
      experiencia: "4",
      habilidades: [
        "Componentes Funcionales y de Clase",
        "Hooks",
        "Gestión de Estados Globales",
        "Creación de Componentes Reutilizables",
        "Integración de Librerías y APIs",
        "Diseño de Interfaces con Material UI"
      ],
      opinion: "Durante mi experiencia profesional, aprendí React para desarrollar la parte front-end de mis proyectos. Trabajé en la implementación de estados globales utilizando herramientas como Redux, creé componentes reutilizables para mejorar la eficiencia del desarrollo y utilicé diversas librerías para optimizar la funcionalidad de las aplicaciones. Además, manejé el diseño de interfaces utilizando Material UI, lo que me permitió crear interfaces atractivas y funcionales. Esta experiencia me ha proporcionado un sólido conocimiento en el desarrollo front-end con React."
    },
    {
      width: "220px",
      name: "MySql",
      type: "Back-End",
      img: "../img/mysql_logo.png",
      experiencia: "4",
      habilidades: [
        "Diseño de Esquemas",
        "Consultas SQL",
        "Índices y Optimización"
      ],
      opinion: "Durante mis estudios universitarios, aprendí a realizar consultas en MySQL, comprendiendo la estructura y el lenguaje de consultas SQL. Además, en mi experiencia laboral, diseñé y creé tablas para un sistema que tenía a mi cargo, asegurando la correcta organización y gestión de los datos. Esto me permitió desarrollar habilidades en la optimización de consultas y en la administración de bases de datos relacionales."
    },

    {
      width: "300px",
      name: "Mongo DB",
      type: "Back-End",
      img: "../img/mongo_db_logo.png",
      experiencia: "4",
      habilidades: [
        "Manipulación de datos básicos",
        "Sintaxis",
        "Escalabilidad"
      ],
      opinion: "Durante mi formación profesional, exploré MongoDB, adquiriendo experiencia en la creación y manipulación de documentos en bases de datos NoSQL. A lo largo de mi carrera, he trabajado con MongoDB para manejar grandes volúmenes de datos y realizar consultas eficientes. En proyectos anteriores, utilicé la flexibilidad de MongoDB para desarrollar estructuras de datos dinámicas y optimizar el rendimiento en sistemas de gran escala."
    },
    {
      width: "225px",
      name: "Git",
      type: "Tecnologia de entorno",
      img: "../img/rsz_github_logo.png",
      experiencia: "4",
      habilidades: [
        "Control de Versiones",
        "Ramas y Fusiones",
        "Resolución de Conflictos"
      ],
      opinion: "A lo largo de mi carrera, he utilizado Git como herramienta esencial para el control de versiones. Desde mis primeros proyectos hasta trabajos profesionales, he gestionado repositorios, colaborado en equipo, y realizado ramas y fusiones para asegurar un desarrollo organizado. Además, he aplicado Git para mantener un historial de cambios claro y revertir a versiones anteriores cuando ha sido necesario, lo que me ha permitido mantener un flujo de trabajo eficiente y estructurado."
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
        <Typography marginTop={1}><strong>Habilidades:</strong> <br></br></Typography>
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
        <Typography marginTop={1}><strong>Nota:</strong></Typography>
        <List>
          <ListItem sx={{ paddingY: 0 }}>
            <ListItemText primary={data[index]?.opinion} />
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

export default TecnologiaDialog;