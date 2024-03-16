import React from "react";
import { NavLink } from "react-router-dom";
import { Toolbar, Grid } from "@mui/material";

import { CHAT_ROUTE, LOGIN_ROUTE } from "../../utils/consts";
import { ColorAppBar, ColorButton } from "./NavBarStyles";

const NavBar = () => {
  const user = false;
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
              <ColorButton size="small" variant="contained">
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
