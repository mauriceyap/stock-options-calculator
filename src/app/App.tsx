import {
  Container,
  ContainerProps,
  CssBaseline,
  Stack,
  styled,
} from "@mui/material";

import { Calculator } from "../calculator";
import { Footer } from "../footer/Footer";

import { AppContextProvider } from "./AppContextProvider";
import { NavBar } from "./NavBar";
import { Preamble } from "./Preamble";

const HeaderBackground = styled("header")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[900],
}));

const HeaderContainer = styled(Container)<ContainerProps>(({ theme }) =>
  theme.unstable_sx({
    pt: 2,
    pb: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  })
);

const MainContainer = styled(Container)<ContainerProps>({
  minHeight: "100vh",
});

export const App = () => (
  <AppContextProvider>
    <CssBaseline />
    <HeaderBackground>
      <NavBar />
      <HeaderContainer maxWidth="xl">
        <Preamble />
      </HeaderContainer>
    </HeaderBackground>
    <MainContainer component="main" maxWidth="xl">
      <Stack spacing={2} py={2}>
        <Calculator />
      </Stack>
    </MainContainer>
    <Footer />
  </AppContextProvider>
);
