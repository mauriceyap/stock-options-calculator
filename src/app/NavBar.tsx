import { DarkMode, LightMode } from "@mui/icons-material";
import { Container, ContainerProps, IconButton, styled } from "@mui/material";

import { SPACING } from "../common/spacing";
import { useColourModeState } from "../contexts/colourMode/useColourModeState";

import { AutosaveSwitch } from "./AutosaveSwitch";

const NavContainer = styled(Container)<ContainerProps>(({ theme }) =>
  theme.unstable_sx({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "end",
    gap: SPACING.sm,
    py: SPACING.sm,
  })
);

export const NavBar = () => {
  const [colourMode, setColourMode] = useColourModeState();

  return (
    <NavContainer component="nav" maxWidth="xl">
      <div>
        <AutosaveSwitch />
      </div>
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
