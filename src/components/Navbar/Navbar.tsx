import React, { useState } from 'react'
import logo from '../../assets/images/LogoSideBySide.png'
import { IconContext } from 'react-icons/lib';
import { FaTimes, FaBars } from 'react-icons/fa';
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks 
} from './Navbar.elements'

interface NavbarProps {
  // click?: boolean
}

const Navbar: React.FC<NavbarProps> = () => {
  const [click, setClick] = useState(false)
  
  const handleClick = () => setClick(!click)

    return (
      <IconContext.Provider value={{color: '#000'}}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'> 
              <img src={logo} alt='Tyson J McNutt'></img>
            </NavLogo>
            <MobileIcon onClick={handleClick} data-cy='mobile-menu'>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem data-cy='about-link'>
                <NavLinks to='/about'>
                  About
                </NavLinks>
              </NavItem>

              <NavItem data-cy='projects-link'>
                <NavLinks to='/projects'>
                  Projects
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    );
}

export default Navbar;