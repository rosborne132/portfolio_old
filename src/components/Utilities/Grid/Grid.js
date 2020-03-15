import React, { memo } from "react"

import { Wrapper } from "./Grid.module.css"

export const Grid = memo(({ children, width }) => (
  <div style={{ width: `${width}%` }} className={Wrapper}>
    {children}
  </div>
))
