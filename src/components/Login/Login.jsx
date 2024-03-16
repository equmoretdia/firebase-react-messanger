import React, { useContext } from "react";
import { Box, Container, Grid } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { Context } from "../../index";
import { ColorGrid, ColorButton } from "./LoginStyles";

const Login = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const { user } = await signInWithPopup(auth, provider);
      console.log(user);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        justifyContent="center"
        alignItems="center"
      >
        <ColorGrid
          container
          style={{ width: 500, borderRadius: 4 }}
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Box p={5}>
            <ColorButton onClick={login} size="small" variant="contained">
              Sign in with Google
            </ColorButton>
          </Box>
        </ColorGrid>
      </Grid>
    </Container>
  );
};

export default Login;
