import React, { Fragment } from "react"
import styled from "styled-components"

const FooterStyles = styled.footer`
  width: 100%;
  padding: 1% 0;
  margin: 0 auto;
  font-size: 16px;
  background-color: #000;
  color: #fff;

  @media only screen and (min-width: 1224px) {
    font-size: 20px;
  }

  @media only screen and (min-width: 1824px) {
    font-size: 22px;
  }

  @media only screen and (min-width: 2440px) {
    font-size: 24px;
  }
`

const Footer = () => (
  <Fragment>
    <FooterStyles role="contentinfo">© 2019</FooterStyles>
  </Fragment>
)

export default Footer
