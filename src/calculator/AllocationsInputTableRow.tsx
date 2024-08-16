import { RemoveCircleOutline } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  TableCell,
  TableRow,
  TextField,
  styled,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Control, Controller } from "react-hook-form";

import { ShareSchemeSelector } from "./ShareSchemeSelector";
import { CalculatorInput } from "./types/inputs";

const StyledDatePicker = styled(DatePicker)({ minWidth: 160 });

const OptionsQuantityTextField = styled(TextField)({ minWidth: 100 });

const StrikePriceTextField = styled(TextField)({ minWidth: 120 });

const NumberMonthsTextField = styled(TextField)({ minWidth: 70 });

const RemoveAllocationButtonContainer = styled("div")({
  flexDirection: "row",
  alignContent: "center",
});

const StyledTableCell = styled(TableCell)(({ theme }) =>
  theme.unstable_sx({
    verticalAlign: "top",
    px: 0.5,
    py: 1,
  })
);

export interface AllocationsInputTableRowProps {
  control: Control<CalculatorInput>;
  companyIndex: number;
  allocationIndex: number;
  removeAllocation: undefined | (() => void);
}

export const AllocationsInputTableRow = ({
  control,
  companyIndex,
  allocationIndex,
  removeAllocation,
}: AllocationsInputTableRowProps) => (
  <TableRow>
    {removeAllocation && (
      <StyledTableCell>
        <RemoveAllocationButtonContainer>
          <IconButton onClick={removeAllocation} color="error">
            <RemoveCircleOutline />
          </IconButton>
        </RemoveAllocationButtonContainer>
      </StyledTableCell>
    )}
    <StyledTableCell>
      <Controller
        name={`companies.${companyIndex}.allocations.${allocationIndex}.vestingCommencement`}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <StyledDatePicker
            value={dayjs(field.value)}
            inputRef={field.ref}
            onChange={(date) => {
              field.onChange(date);
            }}
            slotProps={{
              textField: {
                error: Boolean(error),
                helperText: error?.message ?? null,
              },
            }}
          />
        )}
      />
    </StyledTableCell>
    <StyledTableCell>
      <Controller
        name={`companies.${companyIndex}.allocations.${allocationIndex}.totalOptions`}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <OptionsQuantityTextField
            {...field}
            type="number"
            error={Boolean(error)}
            helperText={error?.message ?? null}
          />
        )}
      />
    </StyledTableCell>
    <StyledTableCell>
      <Controller
        name={`companies.${companyIndex}.allocations.${allocationIndex}.strikePrice`}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <StrikePriceTextField
            {...field}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">£</InputAdornment>
              ),
            }}
            type="number"
            error={Boolean(error)}
            helperText={error?.message ?? null}
          />
        )}
      />
    </StyledTableCell>
    <StyledTableCell>
      <ShareSchemeSelector
        control={control}
        companyIndex={companyIndex}
        allocationIndex={allocationIndex}
      />
    </StyledTableCell>
    <StyledTableCell>
      <Controller
        name={`companies.${companyIndex}.allocations.${allocationIndex}.vestingPeriodMonths`}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <NumberMonthsTextField
            {...field}
            type="number"
            error={Boolean(error)}
            helperText={error?.message ?? null}
          />
        )}
      />
    </StyledTableCell>
    <StyledTableCell>
      <Controller
        name={`companies.${companyIndex}.allocations.${allocationIndex}.vestingCliffMonths`}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <NumberMonthsTextField
            {...field}
            type="number"
            error={Boolean(error)}
            helperText={error?.message ?? null}
          />
        )}
      />
    </StyledTableCell>
    <StyledTableCell>
      <Controller
        name={`companies.${companyIndex}.allocations.${allocationIndex}.optionsImmediateVesting`}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <OptionsQuantityTextField
            {...field}
            type="number"
            error={Boolean(error)}
            helperText={error?.message ?? null}
          />
        )}
      />
    </StyledTableCell>
    <StyledTableCell>
      <Controller
        name={`companies.${companyIndex}.allocations.${allocationIndex}.optionsVestingAtExit`}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <OptionsQuantityTextField
            {...field}
            type="number"
            error={Boolean(error)}
            helperText={error?.message ?? null}
          />
        )}
      />
    </StyledTableCell>
    <StyledTableCell>
      <Controller
        name={`companies.${companyIndex}.allocations.${allocationIndex}.expiry`}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <StyledDatePicker
            value={dayjs(field.value)}
            inputRef={field.ref}
            onChange={(date) => {
              field.onChange(date);
            }}
            slotProps={{
              textField: {
                error: Boolean(error),
                helperText: error?.message ?? null,
              },
            }}
          />
        )}
      />
    </StyledTableCell>
  </TableRow>
);
