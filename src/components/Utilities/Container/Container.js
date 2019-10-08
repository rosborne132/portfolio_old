import React from "react"

const Container = ({ children, width }) => <div style={{ width: `${width}%`, margin: "0 auto" }}>{ children }</div>

export default Container
