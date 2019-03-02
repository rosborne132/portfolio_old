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

  :hover {
    color: #b2b2b2;
  }

  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media only screen and (min-width: 1224px) {
    font-size: 22px;
  }

  @media only screen and (min-width: 1824px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 2440px) {
    font-size: 26px;
  }
`

const Header = () => (
  <Fragment>
    <NavStyles role="navigation">
      <ul className="HeaderGroup">
        <NavLink>
          <Link to="home" smooth={true}>
            Home
          </Link>
        </NavLink>
        <NavLink>
          <Link to="about" smooth={true}>
            About
          </Link>
        </NavLink>
        <NavLink>
          <Link to="work" smooth={true}>
            Work
          </Link>
        </NavLink>
        <NavLink>
          <Link to="contact" smooth={true}>
            Contact
          </Link>
        </NavLink>
      </ul>
    </NavStyles>
  </Fragment>
)

export default Header
