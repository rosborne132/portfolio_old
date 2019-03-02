import React, { Fragment } from "react"
import styled from "styled-components"
import { Link } from "react-scroll"

const NavStyles = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  width: 100%;
  padding: 1% 0;
  margin: 0 auto;
  font-size: 2.3vh;
  background-color: #000;
  color: #fff;
`

const NavLink = styled.li`
  font-size: 16px;
  display: inline;
  padding: 0 3vw;
  cursor: pointer;

  .nav-link {
    color: #fff;
    text-decoration: none;
  }

  .nav-link:hover {
    color: #b2b2b2;
  }
`

const Header = () => (
  <Fragment>
    <NavStyles role="navigation">
      <ul className="HeaderGroup">
        <NavLink>
          <Link to="about" smooth={true}>
            <a className="nav-link">About</a>
          </Link>
        </NavLink>
        <NavLink>
          <Link to="work" smooth={true}>
            <a className="nav-link">Work</a>
          </Link>
        </NavLink>
        <NavLink>
          <Link to="contact" smooth={true}>
            <a className="nav-link">Contact</a>
          </Link>
        </NavLink>
      </ul>
    </NavStyles>
  </Fragment>
)

export default Header
