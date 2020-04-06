import React, { memo } from "react"
import { IconStyle } from "./Icon.module.css"
import classnames from "classnames"
import { Icon as SocialIcon } from "styledoui"

export const Icon = memo(({ link, icon }) => {
    if (icon === undefined) return

    return (
        <a target="_blank" href={`${link}`} rel="noopener noreferrer">
            <SocialIcon
                className={classnames(IconStyle)}
                size="l2"
                icon={icon}
            />
        </a>
    )
})
