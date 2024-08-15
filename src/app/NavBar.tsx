import { DarkMode, LightMode } from "@mui/icons-material";
import { Container, ContainerProps, IconButton, styled } from "@mui/material";

import { useColourModeState } from "../contexts/colourMode/useColourModeState";

const NavContainer = styled(Container)<ContainerProps>({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "end",
});

export const NavBar = () => {
  const [colourMode, setColourMode] = useColourModeState();

  return (
    <NavContainer component="nav" maxWidth="xl">
      <IconButton
        size="large"
        onClick={() => {
          setColourMode(colourMode === "dark" ? "light" : "dark");
        }}
        color="inherit"
      >
        {colourMode === "dark" ? <LightMode /> : <DarkMode />}
      </IconButton>
    </NavContainer>
  );
};
