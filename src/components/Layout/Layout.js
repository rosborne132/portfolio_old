import React, { memo } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import { Footer, Navbar, ParticleEffect } from "../Elements"
import "./layout.css"

export const Layout = memo(({ children }) => (
  <>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
      />
    </Helmet>
    <Navbar />
    <ParticleEffect />
    <main>{children}</main>
    <Footer />
  </>
))

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
