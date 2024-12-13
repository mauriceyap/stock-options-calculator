import { Typography, styled } from "@mui/material";

const StyledHeader = styled("header")({
  alignSelf: "center",
  textAlign: "center",
});

export const Header = () => (
  <StyledHeader>
    <Typography variant="h1" gutterBottom>
      Stock options calculator
    </Typography>
    <Typography maxWidth="sm">
      Use this calculator to see and visualise the predicted value of your stock
      options as they vest over time. Find out the effective financial benefit
      of staying at your company as your options vest.
    </Typography>
  </StyledHeader>
);
