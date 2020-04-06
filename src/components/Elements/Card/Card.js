import React, { memo } from "react"
import { Icon as TechIcon } from "styledoui"

import { Icon } from "../Icon/Icon"
import { CardHeader, CardBody, CardStyle } from "./Card.module.css"

export const ProjectCard = memo(
    ({ desc, linkIcons, projectBackground, techIcons, title }) => (
        <div className={CardBody} style={projectBackground}>
            <span className={CardHeader}>
                <h3>{title}</h3>
                <span>
                    {linkIcons.map(({ icon, link }) => (
                        <Icon key={link} icon={icon} link={link} />
                    ))}
                </span>
            </span>

            <span className={CardStyle}>
                <p style={{ paddingBottom: 20 }}>{desc}</p>
                <h4>Tech:</h4>
                <span style={{ float: "left" }}>
                    {techIcons.map(icon => {
                        if (icon === undefined) return
                        return (
                            <TechIcon
                                icon={icon}
                                size="l2"
                                style={{ paddingRight: 5 }}
                            />
                        )
                    })}
                </span>
            </span>
        </div>
    )
)
