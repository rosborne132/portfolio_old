import React, { Fragment } from "react"
import styled from "styled-components"

const FooterStyles = styled.footer`
  width: 100%;
  padding: 1% 0;
  margin: 0 auto;
  font-size: 2vh;
  background-color: #000;
  color: #fff;
`

const Footer = () => (
  <Fragment>
    <FooterStyles role="contentinfo">© 2019</FooterStyles>
  </Fragment>
)

export default Footer
