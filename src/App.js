import React, { Suspense } from "react";

import { ThemeProvider } from "styled-components";
import { BsBookHalf } from "react-icons/bs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Main, Footer, Header } from "./components/Layout";
import { Navbar, NavItem, NavLink } from "./components/Navbar";
import Spinner from "./components/Spinner";

import { DASHBOARD, CATALOG } from "./shared/routes";

const Dashboard = React.lazy(() => {
  return import("./containers/Dashboard/index");
});
const NotFound = React.lazy(() => {
  return import("./containers/404");
});
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

  let routes = (
    <Suspense fallback={<Spinner></Spinner>}>
      <Switch>
        <Route exact path={DASHBOARD}>
          <Dashboard></Dashboard>
        </Route>

        <Route exact path={CATALOG}>
          <Spinner></Spinner>
        </Route>
        <Route exact path="/">
          <Dashboard></Dashboard>
        </Route>
        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Suspense>
  );

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Navbar>
          <NavItem>
            <NavLink href={CATALOG}>
              <BsBookHalf />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={CATALOG}>Catlog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={DASHBOARD}>Dashboard</NavLink>
          </NavItem>
        </Navbar>
      </Header>
      <Main>
        <Router>{routes}</Router>
      </Main>
      <Footer> Copyright {new Date().getFullYear()} &copy; METACode </Footer>
    </ThemeProvider>
  );
}

export default App;
