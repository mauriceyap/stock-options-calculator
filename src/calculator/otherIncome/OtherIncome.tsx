import { EditRounded } from "@mui/icons-material";
import { IconButton, Stack, Typography, styled } from "@mui/material";
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
}

export const OtherIncome = ({
  otherIncome,
  setOtherIncome,
}: OtherIncomeProps) => {
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  return (
    <>
      <EditOtherIncomeDialog
        open={editDialogOpen}
        onClose={() => {
          setEditDialogOpen(false);
        }}
        onChange={setOtherIncome}
        existingValue={otherIncome}
      />
      <Stack spacing={1}>
        <Typography variant="h5" gutterBottom>
          Other income
        </Typography>
        <Typography>Your expected taxable annual income.</Typography>
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
      </Stack>
    </>
  );
};
