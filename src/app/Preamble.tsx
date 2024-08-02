import { Box, Typography } from "@mui/material";

export const Preamble = () => (
  <Box alignSelf="center" maxWidth="sm">
    <Typography fontSize="1.5rem" paragraph>
      Calculate the value of your employee stock options.
    </Typography>
    <Typography paragraph>
      Use this calculator to see and visualise the predicted value of your stock
      options as they vest over time. Find out the effective financial benefit
      of staying at your company as your options vest.
    </Typography>
    <Typography paragraph>
      This calculator calculates net gains using deductions for people who are
      liable to pay tax on gains from stock options in the UK, except Scotland.
    </Typography>
  </Box>
);
