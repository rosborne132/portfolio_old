import React, { memo } from "react"

import { badge, badgeImg } from "./Badge.module.css"

export const Badge = memo(({ altText, badgeLink, imgLink }) => (
  <div className={badge}>
    <a href={badgeLink} target="_blank">
      <img className={badgeImg} src={imgLink} alt={altText} />
    </a>
  </div>
))
