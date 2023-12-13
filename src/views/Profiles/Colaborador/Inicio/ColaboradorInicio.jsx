import React, { useEffect } from "react";
import { Box, Chip, Container, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { useAuth } from "../../../../context/AuthContext";
import Groups3RoundedIcon from "@mui/icons-material/Groups3Rounded";
import { EditProfile } from "../../../../components/customs/EditProfile";
import { BannerProfile } from "../../../../components/customs/BannerProfile";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../../config/firebase/firebaseDB";

export const ColaboradorInicio = () => {
  const { user, profileImageUrl, setProfileImageUrl } = useAuth();
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  console.log("vista colaborador: id del usuario =>", user.uid);


  useEffect(() => {
    console.log('useEffect AdminInicio --> 1');
    if (user.uid) {
      const userDocRef = doc(db, 'usuarios', user.uid);
      const unsubscribe = onSnapshot(userDocRef, (userDocSnap) => {
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          if (userData.profileImageUrl) {
            setProfileImageUrl(userData.profileImageUrl);
          } else {
            setProfileImageUrl('https://corazon-huasteco.com/assets/imgUser-1d809c39.jpg');
          }
        } else {
          setProfileImageUrl('https://corazon-huasteco.com/assets/imgUser-1d809c39.jpg');
        }
      });
      console.log('useEffect AdminInicio --> 2');
      return () => unsubscribe(); // Limpiamos el listener cuando el componente se desmonta
    }
    console.log('useEffect AdminInicio --> 3');
  }, [user.uid]);

  return (
    <Box>
      {/* CONTENEDOR GRID */}
      <Grid container sx={{ bgcolor: "background.paper" }}>
        {/* BANNER */}
        <Grid item xs={12}>
          <BannerProfile/>
        </Grid>
        {/*FIN BANNER */}

        {/* FLOAT CONT */}
        <Grid container sx={{ position: "relative", bottom: "70px" }}>
          {/* IMAGEN PERFIL */}
          <Grid item md={3} sm={4} xs={12}>
            <Box sx={{m: 1, display: "flex", justifyContent: {md: "flex-end", sm: "flex-end", xs: "center",},}}>
              <Box component="img"
                src={profileImageUrl}
                alt="Perfil"
                sx={{
                  objectFit: "cover",
                  width: 168,
                  height: 168,
                  borderRadius: "50%",
                  border: "2px solid #fff",
                }}
              />
            </Box>
          </Grid>
          {/* FIN IMAGEN PERFIL */}

          {/* DATOS PERFIL */}
          <Grid item md={6} sm={8} xs={12}>
            <Box sx={{display: "flex",height: "100%", flexDirection: "column", justifyContent: "flex-end",}}>
              <Stack direction="row" justifyContent={{ md: "left", sm: "left", xs: "center" }}>
                <Chip 
                  icon={<Groups3RoundedIcon />} 
                  label="Colaborador" 
                  color="warning"
                />
              </Stack>
              <Typography textAlign={{ md: "left", sm: "left", xs: "center" }} variant="h5" color="text.secondary">
                Hola, Bienvenido
              </Typography>
              <Typography textAlign={{ md: "left", sm: "left", xs: "center" }} variant="body1" color="text.primary">
                {user ? user.email : user.displayName}
              </Typography>
            </Box>
          </Grid>
          {/* FIN DATOS PERFIL */}

          {/* BOTON EDITAR PERFIL */}
          <Grid item md={3} sm={12} xs={12}>
            <Box sx={{ height: "100%", display: "flex", alignItems: "flex-end", p: 3,}}>
              <EditProfile userImage={profileImageUrl} user={user.uid} />
            </Box>
          </Grid>
          {/* FIN BOTON EDITAR PERFIL */}
        </Grid>
        {/* FIN FLOAT CONT */}

        <Container maxWidth="md" sx={{ marginTop: "-90px", p: 3 }}>
          <hr />
          <Typography color="text.secondary" sx={{fontStyle: "italic"}} variant={isSmallScreen ? "body1" : "h5"}>
            "En nuestra empresa, compartimos la pasión por la cultura y su difusión. Valoramos tu participación activa y tu dedicación para llevar adelante nuestra visión de proyectar la cultura de nuestra región a nivel nacional e internacional. Trabajemos juntos para promover la creación, la investigación y el desarrollo cultural. ¡Tu aporte es esencial para lograrlo!"
          </Typography>
        </Container>
      </Grid>
      {/* FIN CONTENEDOR GRID */}
    </Box>
  );
};