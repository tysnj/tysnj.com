import styled from 'styled-components';
import { Container } from '../App/globalStyles';

export const Nav = styled.nav`
    background: #ffefceda;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 40px;

  ${Container}
`