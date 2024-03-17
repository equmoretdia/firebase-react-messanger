import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Toolbar, Grid } from "@mui/material";

import { Context } from "../../index";
import { LOGIN_ROUTE } from "../../utils/consts";
import { ColorAppBar, ColorButton } from "./NavBarStyles";

const NavBar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <ColorAppBar color="primary" position="static">
      <Toolbar variant="dense">
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          {user ? (
            <NavLink>
              <ColorButton
                onClick={() => auth.signOut()}
                size="small"
                variant="contained"
              >
                Logout
              </ColorButton>{" "}
            </NavLink>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <ColorButton size="small" variant="contained">
                Login
              </ColorButton>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </ColorAppBar>
  );
};

export default NavBar;
