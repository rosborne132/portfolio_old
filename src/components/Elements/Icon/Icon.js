import React from 'react'

import { fab, fas, IconStyle, a } from "./Icon.module.css"

import "../../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css"

const Icon = ({ link, iconClass }) => (
    <a
      className={a}
      target="_blank"
      href={`${link}`}
      rel="noopener noreferrer"
    >
      <i className={`${fas} ${fab} ${IconStyle} ${iconClass}`} />
    </a>
)

export default Icon
