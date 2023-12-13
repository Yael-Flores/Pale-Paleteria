import React, { lazy, useEffect }   from 'react'
import { Grid,  Typography, Box, Divider, Container, Toolbar, Paper } from '@mui/material';
import { Bread }              from '../../components/customs/Bread';
import { contadorVisitas }    from '../../utils/fnCountStatus';
import { HomeRounded, BusinessRounded } from '@mui/icons-material';
const AvatarItem = lazy(() => import('./AvatarItem').then((module)=> ({default: module.AvatarItem})))
import elder from '../../assets/img/sobre-nosotros/elder.webp'

export const SobreNosotros = () => {

  useEffect(() => {
    contadorVisitas("sobre-nosotros");
  }, [])

  return (
    <Box>
      {/* Breadcrumbs */}
      <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "SOBRE NOSOTROS", ruta: "/sobre-nosotros", icono: <BusinessRounded/>}]}/>
      
      <Container maxWidth="lg">
        <Grid container spacing={3} p={1}>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography variant='h4'  textAlign='left'>Pale Paleterías</Typography>
          </Grid>            
          <Grid item xs={12} sm={12} md={9} lg={9} display={{xs: "none", sm: "none", md:"block", lg: "block"}}></Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} display={{xs: "none", sm: "none", md:"block", lg: "block"}}></Grid>
          <Grid item xs={12} sm={12} md={9} lg={9}>
            <Typography gutterBottom variant='subtitle1' textAlign='left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat non numquam sit distinctio exercitationem quae saepe excepturi porro, fugiat itaque voluptatem doloribus enim dolorem tempora obcaecati alias tempore. Quaerat, suscipit?
            </Typography>
            <Typography gutterBottom variant='subtitle1' textAlign='left'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, dolorum. Dolore atque, quis ratione ducimus ipsum ut culpa, sint a at inventore facilis eos exercitationem beatae velit praesentium amet hic?
            </Typography>
            <Typography  variant='subtitle1' textAlign='left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, temporibus neque eligendi tenetur quidem magnam nesciunt autem itaque dolore repellendus. Voluptatibus, earum odio. Fugit vitae temporibus incidunt praesentium! Odio, corporis?
            </Typography>
            <Toolbar/>
            <Typography  variant='h5' textAlign='left'>
              Nuestros valores
            </Typography>
            <Typography  variant='subtitle1' textAlign='left'>
              <ul>
                <li>Lo más importante son nuestros cllientes</li>
                <li>Trabajar en equipo es mejor que trabajar de forma individual.</li>
                <li>Los proveedores son nuestros socios más importantes.</li>
                <li>Cuidamos y respetamos nuestro lugar de trabajo.</li>
                <li>Si es para el beneficio de la empresa, es para el beneficio de todo el equipo.</li>
                <li>Siempre estamos dispuestos a aprender y enseñar.</li>
              </ul>
            </Typography>
            
          </Grid>  

        </Grid>
      </Container>

      <Divider sx={{mb: 4}}/>

      <Grid container spacing={5}>
        <Grid item xs={12}>
          
          
          
        </Grid>
        <Grid item xs={12} container direction="row" columnSpacing={2} rowSpacing={2} justifyContent="center" sx={{pb: 5}}>
          
        </Grid>
      </Grid>
    </Box>
  )
}
