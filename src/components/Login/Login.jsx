import { Button, Box, Container, Grid } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          style={{ width: 500 }}
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Box p={5}>
            <Button var>Sign in with Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
