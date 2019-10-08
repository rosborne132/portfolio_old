import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import Navbar from "../Elements/Navbar/Navbar"
import Footer from "../Elements/Footer/Footer"
import ParticleEffect from "../Elements/Particles"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Helmet>
    <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css" />
    </Helmet>
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
