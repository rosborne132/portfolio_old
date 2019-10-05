import React from "react"
import PropTypes from "prop-types"

import Navbar from "./Navbar"
import Footer from "./Footer"
import ParticleEffect from "../Elements/Particles"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Navbar />
    <ParticleEffect/>
    <main>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
