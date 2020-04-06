import React, { memo } from "react"
import PropTypes from "prop-types"

import { Footer, Navbar, ParticleEffect } from "../Elements"
import "./Layout.css"

export const Layout = memo(({ children }) => (
    <>
        <Navbar />
        <ParticleEffect />
        <main>{children}</main>
        <Footer />
    </>
))

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
