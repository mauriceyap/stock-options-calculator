import { EditRounded } from "@mui/icons-material";
import {
  Alert,
  Button,
  IconButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";

import { formatGBP } from "../../common/formatGBP";

import { EditOtherIncomeDialog } from "./EditOtherIncomeDialog";

const OtherIncomeValueContainer = styled("section")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    columnGap: 1,
    alignItems: "center",
  })
);

const OtherIncomeTypography = styled(Typography)(({ theme }) => ({
  fontSize: 2 * theme.typography.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
})) as typeof Typography;

export interface OtherIncomeProps {
  otherIncome: number;
  setOtherIncome: (otherIncome: number) => void;
  isOtherIncomeSet: boolean;
  setIsOtherIncomeSet: (isOtherIncomeSet: boolean) => void;
}

export const OtherIncome = ({
  otherIncome,
  setOtherIncome,
  isOtherIncomeSet,
  setIsOtherIncomeSet,
}: OtherIncomeProps) => {
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  return (
    <>
      <EditOtherIncomeDialog
        open={editDialogOpen}
        onClose={() => {
          setEditDialogOpen(false);
        }}
        onChange={(otherIncome) => {
          setOtherIncome(otherIncome);
          setIsOtherIncomeSet(true);
        }}
        existingValue={otherIncome}
      />
      <Stack spacing={1}>
        <Typography variant="h5" gutterBottom>
          Other income
        </Typography>
        <Typography>Your expected taxable annual income.</Typography>
        {isOtherIncomeSet ? (
          <OtherIncomeValueContainer>
            <OtherIncomeTypography component="div">
              {formatGBP(otherIncome)}
            </OtherIncomeTypography>
            <IconButton
              color="primary"
              size="small"
              onClick={() => {
                setEditDialogOpen(true);
              }}
            >
              <EditRounded />
            </IconButton>
          </OtherIncomeValueContainer>
        ) : (
          <>
            <div>
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  setEditDialogOpen(true);
                }}
              >
                Enter your expected income
              </Button>
            </div>
            <Alert variant="standard" severity="info">
              Enter your expected income to see your calculation.
            </Alert>
          </>
        )}
      </Stack>
    </>
  );
};
