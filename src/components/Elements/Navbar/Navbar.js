import React from "react"
import { Link } from "react-scroll"

import { Nav, NavLink} from "./Navbar.module.css"

const links = ["home", "about", "work", "contact"]

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const Navbar = () => (
  <nav role="navigation" className={Nav}>
    <ul className="HeaderGroup">
      { links.map(link => (
        <li key={link} className={NavLink}>
          <Link to={link} smooth={true}>
            { capitalize(link) }
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Navbar
