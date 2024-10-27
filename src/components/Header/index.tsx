import { Nav, NavLink } from './styles'

export function Header() {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/salgados">Salgados</NavLink>
      <NavLink to="/doces">Doces</NavLink>
    </Nav>
  )
}
