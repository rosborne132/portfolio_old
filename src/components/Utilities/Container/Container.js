import React, { memo } from "react"

export const Container = memo(({ children, width, style }) => (
  <div style={{ width: `${width}%`, margin: "0 auto", ...style }}>
    {children}
  </div>
))
