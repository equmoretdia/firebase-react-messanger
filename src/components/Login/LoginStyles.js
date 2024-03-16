import { Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { teal } from "@mui/material/colors";

export const ColorGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: teal[100],
}));

export const ColorButton = styled(Button)(({ theme }) => ({
  color: teal["#E0F2F1"],
  backgroundColor: teal[700],
  "&:hover": {
    backgroundColor: teal[800],
  },
}));
