import React from "react"

const Container = ({ children, width, style }) => <div style={{ width: `${width}%`, margin: "0 auto" , ...style}}>{ children }</div>

export default Container
