import styled from 'styled-components';
import {Link} from "react-router-dom"




export const Navbar1 = styled.div`
  padding:2rem 4rem;
  background-color:rgb(246, 246, 14)
`;




export const Nav = styled.nav`
  display:flex;
  justify-content:space-between;
  align-items:center;
  /* padding:1rem 4rem; */
  
`;


export const NavLogo = styled.img`
  /* ... */
`;


export const NavbarUl = styled.ul`
  display:flex;
  list-style:none;
  gap:2rem;
`;


export const NavLi = styled(Link)`
 cursor: pointer;
 text-decoration:none;
 font-size:1.3rem
`;


/* export const NavTitle = styled.div`
padding-left:0.6rem

`;

export const Title = styled.h2`
text-align:start

`;
export const Contant = styled.p`
text-align:start

`; */












