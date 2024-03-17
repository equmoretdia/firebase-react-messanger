import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Container, Grid } from "@mui/material";

import { Context } from "../../index";
import { ColorTextField, ColorButton } from "./ChatStyles";

const Chat = () => {
  const { auth, db } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50, marginTop: 20 }}
        justifyContent="center"
      >
        <div
          style={{
            width: "80%",
            height: "80vh",
            border: "2px solid #E0F2F1",
            borderRadius: "4px",
            overflowY: "auto",
          }}
        ></div>
        <Grid
          container
          direction="column"
          alignItems="flex-end"
          style={{
            width: "80%",
          }}
        >
          <ColorTextField fullWidth rowsMax="2" sx={{ mb: 2 }} />
          <ColorButton size="small" variant="contained">
            Send
          </ColorButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
