import React, { memo } from "react"
import { FooterStyles } from "./Footer.module.css"

export const Footer = memo(() => (
  <footer role="contentinfo" className={FooterStyles}>
    © 2020
  </footer>
))
