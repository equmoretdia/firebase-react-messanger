import { Box, Container, Grid } from "@mui/material";
import React from "react";

import { ColorGrid, ColorButton } from "./LoginStyles";

const Login = () => {
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
            <ColorButton size="small" variant="contained">
              Sign in with Google
            </ColorButton>
          </Box>
        </ColorGrid>
      </Grid>
    </Container>
  );
};

export default Login;
