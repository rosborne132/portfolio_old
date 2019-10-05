import React from "react"

const Section = ({ className, children, id }) => (
    <section id={id} className={className} style={{ minHeight: 200, padding: "6% 0"}}>
        { children }
    </section>
)

export default Section