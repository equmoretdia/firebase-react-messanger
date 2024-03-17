import { TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { teal } from "@mui/material/colors";

export const ColorTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: teal[400],
    borderWidth: "2px",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: teal[700],
    borderWidth: "2px",
  },
}));

export const ColorButton = styled(Button)(({ theme }) => ({
  color: teal["#E0F2F1"],
  backgroundColor: teal[700],
  "&:hover": {
    backgroundColor: teal[800],
  },
}));
