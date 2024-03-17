import React from "react";
import { Container, Grid } from "@mui/material";

import HeartLoader from "./LoaderStyles";

const Loader = () => {
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
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <HeartLoader />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Loader;
