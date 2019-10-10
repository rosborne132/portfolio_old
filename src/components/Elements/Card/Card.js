import React from "react"

import Icon from "../Icon/Icon"
import { CardHeader, CardBody, CardStyle } from "./Card.module.css"

const ProjectCard = props => (
  <div className={CardBody} style={ props.projectBackground }>
    <span className={CardHeader}>
      {props.title}
      <h3>{props.title}</h3>
      <span>
        { props.linkIcons.map(webLink => {
          const { iconClass, link } = webLink
          return <Icon key={link} iconClass={iconClass} link={link}/>
        })}
      </span>
    </span>

    <span className={CardStyle}>
      <p style={{ paddingBottom: 20 }}>{props.desc}</p>
      <h4>Tech:</h4>
      <span style={{ float: "left" }}>
        { props.techIcons.map(link => <i style={{ paddingRight: 5 }} key={link} className={link}></i>)}
      </span>
    </span>
  </div>
)

export { ProjectCard }
