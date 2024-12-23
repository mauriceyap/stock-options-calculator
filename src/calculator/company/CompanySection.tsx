import {
  AddBox,
  DeleteRounded,
  EditRounded,
  Event,
  TrendingDown,
  TrendingFlat,
  TrendingUp,
} from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid2,
  IconButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import dayjs from "dayjs";
import { Children, ReactNode, useState } from "react";

import { formatGBP } from "../../common/formatGBP";
import { SPACING } from "../../common/spacing";

import { EditAllocationDetailsDialog } from "../allocation/EditAllocationDetailsDialog";
import { defaultAllocationInputValues, now } from "../defaultValues";
import { AllocationInput, CompanyInput } from "../types/inputs";

import { EditCompanyDetailsDialog } from "./EditCompanyDetailsDialog";
import { ExitEventPredictionValue } from "./ExitEventPredictionValue";

const CurrentCompanyChipContainer = styled("div")(({ theme }) =>
  theme.unstable_sx({
    alignSelf: "center",
  })
);

const ExitEventPredictionValuesSection = styled("section")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    rowGap: 2,
    columnGap: 1,
    flexFlow: "wrap",
  })
);

const ShareAllocationsHeadingContainer = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    justifyContent: "space-between",
    gap: 2,
    flexFlow: "wrap",
  })
);

const CardTitle = styled(Typography)(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    gap: 2,
    flexFlow: "wrap",
  })
) as typeof Typography;

const StyledCardContent = styled(CardContent)({ paddingTop: 0 });

export interface CompanySectionProps {
  company: CompanyInput;
  setCompanyDetails: (
    companyDetails: Omit<CompanyInput, "allocations">
  ) => void;
  allCompanyNames: string[];
  deleteCompany: (() => void) | undefined;
  appendNewShareAllocation: (values: AllocationInput) => void;
  alert?: ReactNode;
  children: ReactNode | ReactNode[];
}

export const CompanySection = ({
  company,
  allCompanyNames,
  setCompanyDetails,
  deleteCompany,
  appendNewShareAllocation,
  alert,
  children,
}: CompanySectionProps) => {
  const {
    name,
    leavingDate,
    predictedExitEventSharePriceLow,
    predictedExitEventSharePriceMedium,
    predictedExitEventSharePriceHigh,
    predictedExitEventDate,
  } = company;
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [addAllocationDialogOpen, setAddAllocationDialogOpen] = useState(false);
  return (
    <>
      <EditCompanyDetailsDialog
        open={editDialogOpen}
        onClose={() => {
          setEditDialogOpen(false);
        }}
        onChange={setCompanyDetails}
        existingValues={company}
        allCompanyNames={allCompanyNames}
      />
      <Card variant="outlined">
        <CardHeader
          title={
            <CardTitle component="section">
              <Typography variant="h5" component="span">
                {name}
              </Typography>
              {leavingDate === null && (
                <CurrentCompanyChipContainer>
                  <Chip label="Current company" size="small" color="primary" />
                </CurrentCompanyChipContainer>
              )}
            </CardTitle>
          }
          subheader={
            leavingDate &&
            `${leavingDate < now ? "Left" : "Leaving"} on ${dayjs(
              leavingDate
            ).format("LL")}`
          }
          action={
            <>
              {deleteCompany && (
                <IconButton onClick={deleteCompany} color="error">
                  <DeleteRounded />
                </IconButton>
              )}
              <IconButton
                onClick={() => {
                  setEditDialogOpen(true);
                }}
                color="primary"
              >
                <EditRounded />
              </IconButton>
            </>
          }
        />
        <StyledCardContent>
          <Stack spacing={SPACING.md}>
            <div>
              <Typography variant="subtitle1">
                Exit event predictions
              </Typography>
              <ExitEventPredictionValuesSection>
                <ExitEventPredictionValue
                  icon={TrendingDown}
                  label="Low share price"
                  value={formatGBP(predictedExitEventSharePriceLow)}
                />
                <ExitEventPredictionValue
                  icon={TrendingFlat}
                  label="Medium share price"
                  value={formatGBP(predictedExitEventSharePriceMedium)}
                />
                <ExitEventPredictionValue
                  icon={TrendingUp}
                  label="High share price"
                  value={formatGBP(predictedExitEventSharePriceHigh)}
                />
                <ExitEventPredictionValue
                  icon={Event}
                  label="Date of exit event"
                  value={dayjs(predictedExitEventDate).format("LL")}
                />
              </ExitEventPredictionValuesSection>
            </div>
            <ShareAllocationsHeadingContainer>
              <Typography variant="h6">Share allocations</Typography>
              <Button
                color="success"
                variant="contained"
                startIcon={<AddBox />}
                onClick={() => {
                  setAddAllocationDialogOpen(true);
                }}
                size="small"
              >
                Add a share allocation
              </Button>
              <EditAllocationDetailsDialog
                addAllocation
                open={addAllocationDialogOpen}
                onClose={() => {
                  setAddAllocationDialogOpen(false);
                }}
                onChange={(values) => {
                  appendNewShareAllocation(values);
                }}
                existingValues={defaultAllocationInputValues}
              />
            </ShareAllocationsHeadingContainer>
            <div>
              <Grid2 container spacing={SPACING.sm}>
                {Children.map(children, (child) => (
                  <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 6, xl: 4 }}>
                    {child}
                  </Grid2>
                ))}
              </Grid2>
            </div>
            {alert}
          </Stack>
        </StyledCardContent>
      </Card>
    </>
  );
};
