import { SvgIcon, Typography } from "@mui/material";

export interface ExitEventPredictionValueProps {
  icon: typeof SvgIcon;
  label: string;
  value: string;
}

export const ExitEventPredictionValue = ({
  icon: Icon,
  label,
  value,
}: ExitEventPredictionValueProps) => (
  <div>
    <Typography variant="caption" noWrap>
      <Icon fontSize="inherit" /> {label}
    </Typography>
    <Typography>{value}</Typography>
  </div>
);
