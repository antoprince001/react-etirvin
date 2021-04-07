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
            Title            
        </NavLink>
        </NavHead>
        <NavMenu>
          <NavLink to='/About' activeStyle>
            About
          </NavLink>
          <NavLink to='/Contact' activeStyle>
            Contact
          </NavLink>
        
          
           <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
        </NavMenu>
        <Burger />
         <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;