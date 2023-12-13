import React from "react";
import { Bread }              from '../../components/customs/Bread';
import { HomeRounded, Category} from '@mui/icons-material';
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import botanas    from '../../assets/img/categorias/botanas_large.avif'
import caramelos  from '../../assets/img/categorias/caramelos_large.avif'
import chicles    from '../../assets/img/categorias/chicles_large.avif'
import chocolates from '../../assets/img/categorias/chocolates_large.avif'
import dulces_con_juguetes from '../../assets/img/categorias/dulces_con_juguetes_large.avif'
import dulces_tipicos from '../../assets/img/categorias/dulces_tipicos_large.avif'
import galletas from '../../assets/img/categorias/galletas_large.avif'
import gelatinas from '../../assets/img/categorias/gelatinas_large.avif'
import gomitas from '../../assets/img/categorias/gomitas_large.avif'
import malvaviscos from '../../assets/img/categorias/malvaviscos_large.avif'
import mazapanes from '../../assets/img/categorias/mazapanes_large.avif'
import paletas from '../../assets/img/categorias/paletas_large.avif'
import polvitos from '../../assets/img/categorias/polvitos_large.avif'
import pulpas from '../../assets/img/categorias/pulpas_large.avif'
import snacks from '../../assets/img/categorias/snacks_large.avif'

export const Categorias = () => {
  return (
    <Box>
      <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "sección de categorias", ruta: "/categorias", icono: <Category/>}]}/>
        <Container maxWidth="xl">
          <Grid container spacing={3} p={1}>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Paper elevation={0}>
                <img src={botanas} alt="botanas" width="100%" height="100%"/>
                <Typography variant='h5' color='primary' textAlign='center'>Paletas de Hielo</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Paper elevation={0}>
                <img src={caramelos} alt="caramelos" width="100%" height="100%"/>
                <Typography variant='h5' color='primary' textAlign='center'>Helados</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Paper elevation={0}>
                <img src={chicles} alt="chicles" width="100%" height="100%"/>
                <Typography variant='h5' color='primary' textAlign='center'>Fresas con Crema</Typography>
              </Paper>
            </Grid>


            
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Paper elevation={0}>
                <img src={chocolates} alt="chocolates" width="100%" height="100%"/>
                <Typography variant='h5' color='primary' textAlign='center'>BananaSplit</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Paper elevation={0}>
                <img src={dulces_con_juguetes} alt="dulces con juguetes" width="100%" height="100%"/>
                <Typography variant='h5' color='primary' textAlign='center'>Aguas</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Paper elevation={0}>
                <img src={dulces_tipicos} alt="dulces tipicos" width="100%" height="100%"/>
                <Typography variant='h5' color='primary' textAlign='center'>Copa Helada</Typography>
              </Paper>
            </Grid>
        
          </Grid>
        </Container>
    </Box>
  );
};
