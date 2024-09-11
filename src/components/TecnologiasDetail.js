import React from 'react';
import { Grid, List, ListItem, ListItemText, Typography  } from '@mui/material';

const TecnologiasDetail = () => {
  return (
    <section>
      <div className="container" style={{ height: "100%", display: "flex", alignItems: "center"}}>
        <Grid container spacing={3}>
          <Grid item xs={4} >
            <div className="card_tecnologia">
              <Typography variant="h4" component="h3">HTML</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Estructuración Semántica" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="world" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Formularios Avanzados" />
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={4} >
            <div className="card_tecnologia">
              <Typography variant="h4" component="h3">CSS</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Diseño Responsivo" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Flexbox y Grid" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Animaciones y Transiciones" />
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={4} >
            <div className="card_tecnologia">
              <Typography variant="h4" component="h3">JavaScript</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Manipulación del DOM" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Manejo de Eventos" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Programación Asíncrona" />
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={4} >
            <div className="card_tecnologia">
              <Typography variant="h4" component="h3">PHP</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Manejo de Formularios" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Conexión con Bases de Datos" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Autenticación y Autorización" />
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={4} >
            <div className="card_tecnologia">
              <Typography variant="h4" component="h3">Laravel</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Rutas y Controladores" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Eloquent ORM" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Middleware y Autenticación" />
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={4} >
            <div className="card_tecnologia">
              <Typography variant="h4" component="h3">React</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Componentes Funcionales y de Clase" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Hooks" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="example" />
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={4} >
            <div className="card_tecnologia">
              <Typography variant="h4" component="h3">Mongo Db</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Modelado de Documentos" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Consultas y Agregaciones" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Escalabilidad" />
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={4} >
            <div className="card_tecnologia">
              <Typography variant="h4" component="h3">MySQL</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Diseño de Esquemas" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Consultas SQL" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Índices y Optimización" />
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={4} >
            <div className="card_tecnologia">
              <Typography variant="h4" component="h3">Git</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Control de Versiones" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Ramas y Fusiones" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Resolución de Conflictos" />
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default TecnologiasDetail;
