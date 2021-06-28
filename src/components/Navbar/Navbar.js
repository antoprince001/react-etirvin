import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavHead,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import Burger from './Burger';
const Navbar = () => {
  return (
    <>
      <Nav>
       <NavHead>
        
        <NavLink to='/' activeStyle>
            Navbar            
        </NavLink>
        </NavHead>
        <NavMenu>
          <NavLink to='/About' activeStyle>
            About
          </NavLink>
          <NavLink to='/Contact' activeStyle>
            Contact
          </NavLink>
        
        </NavMenu>
        <Burger />
         <NavBtn>
          <NavBtnLink to='/'>Button</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;