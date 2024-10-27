import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  background-color: #272822;
  padding: 1rem;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0px;
  width: 100%;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #f26709;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0rem 4rem;

  &:hover {
    color: #ce5c14;
  }
`
