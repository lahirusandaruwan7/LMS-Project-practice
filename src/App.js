import React from "react";
import { Header, Main, Footer } from "./components/Layout";
import { Navbar, NavItem, NavLink } from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default App;
