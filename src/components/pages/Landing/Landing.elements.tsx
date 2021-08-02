import styled from 'styled-components';
import { Container } from '../../App/globalStyles';
import { Link } from 'react-router-dom';
import { CgArrowLongDown } from 'react-icons/cg';

export const LandingContainer = styled(Container)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.div`
  ${Container}
`

export const NavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  list-style: none;
  width: 20%;
  }
`

export const NavItem = styled.li`
  margin-top: 30px;
  height: 20px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #000;
  }
`;

export const NavLinks = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  /* size: 4rem; */
`;

export const ScrollIcon = styled(CgArrowLongDown)`
  margin-top: 2rem;
  height: 4rem;
  width: 3rem;
`