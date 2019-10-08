import React from "react"

import { Wrapper } from "./Grid.module.css"

const Grid = ({ children, width }) => <div style={{ width: `${width}%`}} className={Wrapper}>{ children }</div>

export default Grid
