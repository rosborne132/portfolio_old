import React from "react"
import styled from "styled-components"

const FooterStyles = styled.footer`
  padding: 1% 0;
  font-size: calc(16px + (22 - 14) * ((100vw - 300px) / (1600 - 300)));
  margin: 0 auto;
`

const Footer = () => <FooterStyles role="contentinfo">© 2019</FooterStyles>

export default Footer
