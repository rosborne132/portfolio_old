import React, { memo } from "react"

export const Section = memo(({ className, children, id, style }) => (
  <section
    id={id}
    className={className}
    style={{ minHeight: 200, padding: "6% 0", ...style }}
  >
    {children}
  </section>
))
