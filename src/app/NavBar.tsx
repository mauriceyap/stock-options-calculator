import { DarkMode, LightMode, Save } from "@mui/icons-material";
import {
  Button,
  Container,
  ContainerProps,
  IconButton,
  Tooltip,
  styled,
} from "@mui/material";

import { SPACING } from "../common/spacing";
import { useColourModeState } from "../contexts/colourMode/useColourModeState";
import { useSaveData } from "../contexts/saveData/useSaveData";

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

  const { saveDataToLocalStorage, changesPresent } = useSaveData();

  return (
    <NavContainer component="nav" maxWidth="xl">
      {changesPresent && (
        <div>
          <Tooltip title="Save your calculation values to your browser's local storage">
            <Button
              startIcon={<Save fontSize="inherit" />}
              variant="outlined"
              size="small"
              onClick={saveDataToLocalStorage}
            >
              Save your changes
            </Button>
          </Tooltip>
        </div>
      )}
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
