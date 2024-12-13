import { CheckCircleOutline, HighlightOff } from "@mui/icons-material";
import {
  Avatar,
  AvatarProps,
  FormControlLabel,
  FormGroup,
  Switch,
  Tooltip,
  styled,
} from "@mui/material";

import { useSaveData } from "../contexts/saveData/useSaveData";

const StyledAvatar = styled(Avatar)<AvatarProps & { checked: boolean }>(
  ({ theme, checked }) => ({
    height: "inherit",
    width: "inherit",
    backgroundColor: checked
      ? theme.palette.primary.main
      : theme.palette.text.primary,
  })
);

export const AutosaveSwitch = () => {
  const { autosaveEnabled, setAutosaveEnabled } = useSaveData();

  return (
    <Tooltip
      title="Save your calculation values to your browser's local storage"
      arrow
    >
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={autosaveEnabled}
              onChange={(_, checked) => {
                setAutosaveEnabled(checked);
              }}
              checkedIcon={
                <StyledAvatar checked>
                  <CheckCircleOutline fontSize="inherit" />
                </StyledAvatar>
              }
              icon={
                <StyledAvatar checked={false}>
                  <HighlightOff fontSize="inherit" />
                </StyledAvatar>
              }
            />
          }
          label={`Autosave (${autosaveEnabled ? "on" : "off"})`}
        />
      </FormGroup>
    </Tooltip>
  );
};
