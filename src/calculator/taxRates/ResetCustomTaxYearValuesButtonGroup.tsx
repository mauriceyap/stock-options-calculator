import { ArrowDropDown } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  ClickAwayListenerProps,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  styled,
} from "@mui/material";
import { useCallback, useRef, useState } from "react";

import { TAX_YEARS, TaxYear } from "../../config/tax";

import { TAX_YEAR_DISPLAY_NAMES } from "../displayNames";

const TaxYearOptionsPopper = styled(Popper)({
  zIndex: 1,
});

export interface ResetCustomTaxYearValuesButtonGroupProps {
  onReset: (taxYear: TaxYear) => void;
}

export const ResetCustomTaxYearValuesButtonGroup = ({
  onReset,
}: ResetCustomTaxYearValuesButtonGroupProps) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  const [taxYearValuesToReset, setTaxYearValuesToReset] = useState<TaxYear>(
    TAX_YEARS[0]
  );

  const handleClose = useCallback<ClickAwayListenerProps["onClickAway"]>(
    (event) => {
      if (anchorRef.current?.contains(event.target as HTMLElement)) {
        return;
      }

      setOpen(false);
    },
    [anchorRef]
  );

  return (
    <div>
      <TaxYearOptionsPopper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper variant="outlined">
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem>
                  {TAX_YEARS.map((taxYear) => (
                    <MenuItem
                      key={taxYear}
                      selected={taxYear === taxYearValuesToReset}
                      onClick={() => {
                        setTaxYearValuesToReset(taxYear);
                        setOpen(false);
                      }}
                    >
                      {TAX_YEAR_DISPLAY_NAMES[taxYear]}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </TaxYearOptionsPopper>
      <ButtonGroup variant="outlined" color="secondary" ref={anchorRef}>
        <Button
          onClick={() => {
            onReset(taxYearValuesToReset);
          }}
        >
          Reset values to {TAX_YEAR_DISPLAY_NAMES[taxYearValuesToReset]} tax
          year
        </Button>
        <Button
          size="small"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          <ArrowDropDown />
        </Button>
      </ButtonGroup>
    </div>
  );
};
