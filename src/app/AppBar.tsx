import { DarkMode, LightMode } from "@mui/icons-material";
import {
  IconButton,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
} from "@mui/material";

import { useColourModeState } from "../contexts/colourMode/useColourModeState";

export const AppBar = () => {
  const [colourMode, setColourMode] = useColourModeState();

  return (
    <MuiAppBar position="sticky">
      <Toolbar variant="dense">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Stock options calculator
        </Typography>
        <IconButton
          size="large"
          onClick={() => {
            setColourMode(colourMode === "dark" ? "light" : "dark");
          }}
          color="inherit"
        >
          {colourMode === "dark" ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
};
