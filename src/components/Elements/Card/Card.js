import React, { memo } from "react"

import { Icon } from "../Icon/Icon"
import { CardHeader, CardBody, CardStyle } from "./Card.module.css"

export const ProjectCard = memo(
  ({ desc, linkIcons, projectBackground, techIcons, title }) => (
    <div className={CardBody} style={projectBackground}>
      <span className={CardHeader}>
        <h3>{title}</h3>
        <span>
          {linkIcons.map(webLink => {
            const { iconClass, link } = webLink
            return <Icon key={link} iconClass={iconClass} link={link} />
          })}
        </span>
      </span>

      <span className={CardStyle}>
        <p style={{ paddingBottom: 20 }}>{desc}</p>
        <h4>Tech:</h4>
        <span style={{ float: "left" }}>
          {techIcons.map(link => (
            <i style={{ paddingRight: 5 }} key={link} className={link}></i>
          ))}
        </span>
      </span>
    </div>
  )
)
