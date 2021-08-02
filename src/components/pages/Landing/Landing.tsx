import React, { useState } from 'react';
import logo from '../../../assets/images/LogoStacked.png'
import { LandingContainer, Logo, NavMenu, NavItem, NavLinks, ScrollIcon } from './Landing.elements';

interface LandingProps {

}

const Landing: React.FC<LandingProps> = () => {
    const [click, setClick] = useState(false)
  
    const handleClick = () => setClick(!click)
  
    return (
        <LandingContainer>
            <Logo>
                <img src={logo} alt='tysnj.com logo'></img>
            </Logo>
            <NavMenu onClick={handleClick}>
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
            <ScrollIcon/>
        </LandingContainer>
    );
}

export default Landing;