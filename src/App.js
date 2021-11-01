import React from "react";
import { ThemeProvider } from "styled-components";

import { Header, Main, Footer } from "./components/Layout";
import { Navbar, NavItem, NavLink } from "./components/Navbar";

function App() {
  const theme = {
    primary: {
      main: "#29b6f6",
      light: "#73e8ff",
      dark: "#0086c3",
      textColor: "#000",
    },
    secondary: {
      main: "#fff",
    },
    spacing: (factor) => `${factor * 8}px`,
  };
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Navbar>
          <NavItem>
            <NavLink href="#">Catlog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Dashboard</NavLink>
          </NavItem>
        </Navbar>
      </Header>
      <Main>This is the main</Main>
      <Footer>This is the footer</Footer>
    </ThemeProvider>
  );
}

export default App;
