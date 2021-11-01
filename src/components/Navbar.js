import styled from "styled-components/";

export const Navbar = styled.ul`
display:flex;
align-items:center;
list-style-type: none;
margin: 0px;
height: 5vh;
position:fixed;
top:0;
width:100%;
z-index:1;
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
