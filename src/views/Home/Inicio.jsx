import React from 'react'
import { Paper, Grid, Container, Card, CardMedia, Typography } from '@mui/material';

import { Carrusel } from './Carrusel/Carrusel';
import promo_02 from '../../assets/img/inicio/promo_02.webp'
import promo_03 from '../../assets/img/inicio/promo_03.webp'
import promo_04 from '../../assets/img/inicio/promo_04.webp'
import promo_05 from '../../assets/img/inicio/promo_05.webp'
import promo_06 from '../../assets/img/inicio/promo_06.webp'
import promo_07 from '../../assets/img/inicio/promo_07.webp'
import promo_08 from '../../assets/img/inicio/promo_08.webp'
import promo_09 from '../../assets/img/inicio/promo_09.webp'
import promo_10 from '../../assets/img/inicio/promo_10.webp'
import promo_11 from '../../assets/img/inicio/promo_11.webp'
import promo_12 from '../../assets/img/inicio/promo_12.webp'
import styled from '@emotion/styled';
import { WavyDivider } from '../../components/customs/WavyDivider';
import { SliderProductoNavidad } from './SliderProductoNavidad';
import { SliderProductoPinata } from './SliderProductoPinata';
import { getProductosNavidadData } from '../../utils/fnProductos';
import { useState } from 'react';
import { useEffect } from 'react';


export const Inicio = () => {
  const [productosNavidad, setProductosNavidad] = useState(null);     //estados para almacenar la info de las diferentes colecciones

  const getProductosNavidad = async() => {                //obtenemos los datos en general para poder mandarlos a otros componentes
    const p = await getProductosNavidadData();
    setProductosNavidad(p.docs);
  }

  useEffect(()=>{                                     //ejecuta la funcion al inicio para obtener los datos
    getProductosNavidad();
    console.log(productosNavidad);
  }, []);

  return (
    <>
      {/* SECTION ONE -- CARRUSEL */}
      <Paper component="article" elevation={0}>
        <Carrusel />
      </Paper>
      <WavyDivider invertColors/>

      <Container maxWidth="xl">
        {/* SECTION TWO */}
        <Paper component="article" elevation={0}>
          <Container maxWidth="lg">
              <Grid container columnSpacing={2} py={5} my={{xs: 0, md:5}}>
                <Grid item container xs={12} lg={12} direction="column" justifyContent="center" alignItems="flex-start">
                  <Typography gutterBottom variant="h4" component="p" color="primary" fontWeight={700}>
                    Nuestros Productos
                  </Typography>
                </Grid>
                <Grid item xs={12} lg={12}>
                  <SliderProductoNavidad CardHover={CardHover} productosNavidad={productosNavidad} />
                </Grid>
              </Grid>
          </Container>
        </Paper>

        
              
              

              
              
            


        
        
      </Container>
    </>
  );
}

const CardHover = styled(Card)({
  display: "inline-block", position: "relative", 
  "&:after":{
    content: '""',
    position: "absolute",
    top: 0, right: 0, bottom: 0, left: 0,
    boxShadow: "inset 0 0 0 0 rgba(255,255,255,.5)",
    transition: "box-shadow .1s ease"
  },
  "&:hover:after":{ boxShadow: "inset 0 0 0 15px rgba(255,255,255,.5)" },
  "& > img":{ transition: "transform .5s ease" },
  "&:hover > img": { transform: "scale(1.2)"}

});

