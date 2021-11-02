import styled from "styled-components/";

export const Navbar = styled.ul`
padding:1em 0;
list-style-type: none;
margin: 0px;
overflow: hidden;
background-color:${(props)=>props.theme.primary.main};
`;
export const NavItem = styled.li`
  display:inline;
 

`;
export const NavLink = styled.a`
  color: ${(props)=>props.theme.primary.textcolor};
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 1.25em;

  :hover {
    background-color: ${(props)=>props.theme.primary.light};
  }
  .active {
    background-color:${(props)=>props.theme.primary.dark};
  }
`;
