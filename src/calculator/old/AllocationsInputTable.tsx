import { AddCircleOutline } from "@mui/icons-material";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import { Control, useFieldArray } from "react-hook-form";

import { defaultAllocationInputValues } from "../defaultValues";
import { CalculatorInput } from "../types/inputs";

import { AllocationsInputTableRow } from "./AllocationsInputTableRow";

const StyledTableCell = styled(TableCell)(({ theme }) =>
  theme.unstable_sx({
    verticalAlign: "top",
    px: 0.5,
    py: 1,
  })
);

const AddAllocationButton = styled(Button)(({ theme }) =>
  theme.unstable_sx({
    position: "sticky",
    left: 0,
  })
);

export interface AllocationsInputTableProps {
  control: Control<CalculatorInput>;
  companyIndex: number;
}

export const AllocationsInputTable = ({
  control,
  companyIndex,
}: AllocationsInputTableProps) => {
  const {
    fields: allocationsFields,
    append: appendAllocation,
    remove: removeAllocation,
  } = useFieldArray({
    control,
    name: `companies.${companyIndex}.allocations`,
  });

  const showRemoveButtonColumn = allocationsFields.length > 1;

  return (
    <TableContainer component={Paper} variant="outlined">
      <Table size="small">
        <TableHead>
          <TableRow>
            {showRemoveButtonColumn && <TableCell />}
            <StyledTableCell>Vesting commencement date</StyledTableCell>
            <StyledTableCell>Number of options</StyledTableCell>
            <StyledTableCell>Strike price</StyledTableCell>
            <StyledTableCell>Employee share scheme</StyledTableCell>
            <StyledTableCell>Vesting period (months)</StyledTableCell>
            <StyledTableCell>Vesting cliff (months)</StyledTableCell>
            <StyledTableCell>Options vesting immediately</StyledTableCell>
            <StyledTableCell>Options vesting at exit</StyledTableCell>
            <StyledTableCell>Expiry date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allocationsFields.map((field, index) => (
            <AllocationsInputTableRow
              key={field.id}
              control={control}
              companyIndex={companyIndex}
              allocationIndex={index}
              removeAllocation={
                showRemoveButtonColumn
                  ? () => {
                      removeAllocation(index);
                    }
                  : undefined
              }
            />
          ))}
          <TableRow>
            <StyledTableCell colSpan={9 + (showRemoveButtonColumn ? 1 : 0)}>
              <div>
                <AddAllocationButton
                  onClick={() => {
                    appendAllocation(defaultAllocationInputValues);
                  }}
                  color="success"
                  startIcon={<AddCircleOutline />}
                >
                  Add another allocation
                </AddAllocationButton>
              </div>
            </StyledTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
