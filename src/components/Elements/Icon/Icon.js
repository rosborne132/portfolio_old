import React, { memo } from "react"
import { fab, fas, IconStyle } from "./Icon.module.css"
import "../../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css"

export const Icon = memo(({ link, iconClass }) => (
  <a target="_blank" href={`${link}`} rel="noopener noreferrer">
    <i className={`${fas} ${fab} ${IconStyle} ${iconClass}`} />
  </a>
))
