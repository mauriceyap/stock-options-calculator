import { Container, CssBaseline } from "@mui/material";

import { Calculator } from "../calculator";

import { AppBar } from "./AppBar";
import { AppContextProvider } from "./AppContextProvider";
import { Preamble } from "./Preamble";

export const App = () => (
  <AppContextProvider>
    <CssBaseline />
    <AppBar />
    <Container component="main" maxWidth="xl">
      <Preamble />
      <Calculator />
    </Container>
  </AppContextProvider>
);
