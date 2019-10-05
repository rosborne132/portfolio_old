import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"

const NavStyles = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 1% 0;
  background-color: #000;
`

const NavLink = styled.li`
  font-size: calc(14px + (22 - 14) * ((100vw - 300px) / (1600 - 300)));
  display: inline;
  padding: 0 3vw;
  cursor: pointer;

  :hover {
    color: #b2b2b2;
  }
`

const links = ["home", "about", "work", "contact"]

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const Navbar = () => (
    <NavStyles role="navigation">
      <ul className="HeaderGroup">
        { links.map(link => (
          <NavLink key={link}>
            <Link to={link} smooth={true}>
              { capitalize(link) }
            </Link>
          </NavLink>
        ))}
      </ul>
    </NavStyles>
)

export default Navbar
