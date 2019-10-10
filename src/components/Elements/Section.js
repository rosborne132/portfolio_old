import React from "react"

const Section = ({ className, children, id, style }) => (
    <section id={id} className={className} style={{ minHeight: 200, padding: "6% 0", ...style}}>
        { children }
    </section>
)

export default Section