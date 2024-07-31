import { Container, ContainerProps, CssBaseline, Stack } from "@mui/material";

import { Calculator } from "../calculator";
import { Footer } from "../footer/Footer";

import { AppBar } from "./AppBar";
import { AppContextProvider } from "./AppContextProvider";
import { Preamble } from "./Preamble";

const mainSx: ContainerProps["sx"] = { minHeight: "100vh" };

export const App = () => (
  <AppContextProvider>
    <CssBaseline />
    <AppBar />
    <Container component="main" maxWidth="xl" sx={mainSx}>
      <Stack spacing={2} py={2}>
        <Preamble />
        <Calculator />
      </Stack>
    </Container>
    <Footer />
  </AppContextProvider>
);
