import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { teal } from "@mui/material/colors";

export const ColorAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: teal[400],
}));

export const ColorButton = styled(Button)(({ theme }) => ({
  color: teal["#E0F2F1"],
  backgroundColor: teal[700],
  "&:hover": {
    backgroundColor: teal[800],
  },
}));
