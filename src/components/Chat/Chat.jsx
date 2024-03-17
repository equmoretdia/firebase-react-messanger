import React, { useState, useContext } from "react";
import { FieldValue } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Container, Grid } from "@mui/material";

import Loader from "../Loader/Loader";
import { Context } from "../../index";
import { ColorTextField, ColorButton } from "./ChatStyles";

const Chat = () => {
  const { auth, db } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(
    db.collection("messages").orderBy("createdAt")
  );

  const sendMessage = async () => {
    db.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: FieldValue.serverTimestamp(),
    });
    setValue("");
  };

  if (loading) {
    return <Loader />;
  }

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
          <ColorTextField
            fullWidth
            multiline
            maxRows="2"
            sx={{ mb: 2 }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <ColorButton size="small" variant="contained" onClick={sendMessage}>
            Send
          </ColorButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
