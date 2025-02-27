import { Container, ContainerProps, CssBaseline, styled } from "@mui/material";

import { Calculator } from "../calculator";
import { Footer } from "../footer/Footer";

import { AppContextProvider } from "./AppContextProvider";
import { Header } from "./Header";
import { NavBar } from "./NavBar";

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

const MainContainer = styled(Container)<ContainerProps>(({ theme }) =>
  theme.unstable_sx({
    minHeight: "100vh",
    py: 4,
  })
);

export const App = () => (
  <AppContextProvider>
    <CssBaseline />
    <HeaderBackground>
      <NavBar />
      <HeaderContainer maxWidth="xl">
        <Header />
      </HeaderContainer>
    </HeaderBackground>
    <MainContainer component="main" maxWidth="xl">
      <Calculator />
    </MainContainer>
    <Footer />
  </AppContextProvider>
);
