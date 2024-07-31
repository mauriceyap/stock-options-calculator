import { Box, Typography } from "@mui/material";

export const Preamble = () => (
  <Box alignSelf="center" maxWidth="md" py={4}>
    <Typography fontSize="1.5rem" paragraph>
      Calculate and visualise the potential value of employee stock options you
      have been allocated as they vest over time.
    </Typography>
    <Typography paragraph>
      This calculator is for people who are liable to pay tax on gains from
      stock options in the UK, except Scotland.
    </Typography>
  </Box>
);
