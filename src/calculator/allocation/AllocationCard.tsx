import { DeleteRounded, EditRounded } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  styled,
} from "@mui/material";
import dayjs from "dayjs";
import { Fragment, ReactNode, useState } from "react";

import { formatGBP } from "../../common/formatGBP";
import { formatQuantity } from "../../common/formatQuantity";

import { AllocationInput } from "../types/inputs";

import { EditAllocationDetailsDialog } from "./EditAllocationDetailsDialog";

const TotalOptionsTypography = styled("span")(({ theme }) =>
  theme.unstable_sx({
    fontSize: 3 * theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
  })
);

const SharesBreakdownList = styled("ul")({
  paddingInlineStart: 0,
  listStyle: "none",
});

export interface AllocationCardProps {
  allocation: AllocationInput;
  setAllocation: (allocation: AllocationInput) => void;
  deleteAllocation: (() => void) | undefined;
}

export const AllocationCard = ({
  allocation,
  setAllocation,
  deleteAllocation,
}: AllocationCardProps) => {
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const {
    vestingCommencement,
    totalOptions,
    strikePrice,
    optionsImmediateVesting,
    optionsVestingAtExit,
    vestingCliffMonths,
    vestingPeriodMonths,
    expiry,
  } = allocation;

  const tenureBasedVestingOptionsMessage = (() => {
    const phrases: ReactNode[] = [];

    if (optionsImmediateVesting > 0 || optionsVestingAtExit > 0) {
      phrases.push(
        <Typography component="span" fontWeight="medium">
          {formatQuantity(
            totalOptions - optionsImmediateVesting - optionsVestingAtExit
          )}
        </Typography>
      );
    }

    phrases.push(`vesting over ${vestingPeriodMonths} months`);

    if (vestingCliffMonths !== 0) {
      phrases.push(`with a ${vestingCliffMonths}-month cliff`);
    }

    return phrases.reduce((acc, curr, i) => [
      <Fragment key={`${i}acc`}>{acc}</Fragment>,
      <Fragment key={`${i}space`}> </Fragment>,
      <Fragment key={`${i}curr`}>{curr}</Fragment>,
    ]);
  })();

  return (
    <>
      <EditAllocationDetailsDialog
        open={editDialogOpen}
        onClose={() => {
          setEditDialogOpen(false);
        }}
        onChange={setAllocation}
        existingValues={allocation}
      />
      <Card variant="outlined">
        <CardContent>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Vesting from {dayjs(vestingCommencement).format("ll")}
          </Typography>
          <Typography component="div" gutterBottom>
            <Typography align="center">
              <TotalOptionsTypography>
                {formatQuantity(totalOptions, totalOptions >= 10 * 1000 * 1000)}
              </TotalOptionsTypography>{" "}
              <Typography component="span">options</Typography>
            </Typography>
            <SharesBreakdownList>
              {optionsImmediateVesting > 0 && (
                <li>
                  <Typography component="span" fontWeight="medium">
                    {formatQuantity(optionsImmediateVesting)}
                  </Typography>{" "}
                  immediately vesting
                </li>
              )}
              <li>{tenureBasedVestingOptionsMessage}</li>
              {optionsVestingAtExit > 0 && (
                <li>
                  <Typography component="span" fontWeight="medium">
                    {formatQuantity(optionsVestingAtExit)}
                  </Typography>{" "}
                  vesting on exit
                </li>
              )}
            </SharesBreakdownList>
          </Typography>
          <Typography component="div" gutterBottom>
            <Typography
              component="span"
              fontWeight={(theme) => theme.typography.fontWeightMedium}
            >
              {formatGBP(strikePrice)}
            </Typography>{" "}
            strike price
          </Typography>
          <Typography component="div" variant="body2">
            This allocation expires on {dayjs(expiry).format("ll")}.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            startIcon={<EditRounded />}
            variant="outlined"
            onClick={() => {
              setEditDialogOpen(true);
            }}
          >
            Edit
          </Button>
          {deleteAllocation && (
            <Button
              size="small"
              color="error"
              startIcon={<DeleteRounded />}
              onClick={deleteAllocation}
            >
              Remove
            </Button>
          )}
        </CardActions>
      </Card>
    </>
  );
};
