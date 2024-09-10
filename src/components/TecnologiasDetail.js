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
                  <ListItemText primary="hello" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="world" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="example" />
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={4} >
            <div className="card_tecnologia">
              <Typography variant="h4" component="h3">CSS</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="hello" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="world" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="example" />
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={4} >
            <div className="card_tecnologia">
              <Typography variant="h4" component="h3">JavaScript</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="hello" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="world" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="example" />
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={4} >
            <div className="card_tecnologia">
              <Typography variant="h4" component="h3">PHP</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="hello" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="world" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="example" />
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={4} >
            <div className="card_tecnologia">
              <Typography variant="h4" component="h3">Laravel</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="hello" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="world" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="example" />
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={4} >
            <div className="card_tecnologia">
              <Typography variant="h4" component="h3">React</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="hello" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="world" />
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
                  <ListItemText primary="hello" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="world" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="example" />
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={4} >
            <div className="card_tecnologia">
              <Typography variant="h4" component="h3">MySQL</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="hello" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="world" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="example" />
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={4} >
            <div className="card_tecnologia">
              <Typography variant="h4" component="h3">Git</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="hello" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="world" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="example" />
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
