import React from "react";
import Icon from "./index";
// webpack svg loader
// svg作为组件引入
import {ReactComponent as SmileIcon} from '../../assets/icon/smile.svg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faFolder, faStickyNote } from '@fortawesome/free-solid-svg-icons'

export default {
    title: "UI 组件/icon",
    component: Icon
}

export const Default = () => {
    return <Icon icon={SmileIcon} />
}

export const CustomColor = () => {
    return <Icon icon={SmileIcon} color='#ffffff' />
}

export const CustomSize = () => {
    return <Icon icon={SmileIcon} color='#ffffff' width={48} height={48} />
}

export const FontAwesome= () => {
    return <FontAwesomeIcon icon={faCommentDots} />
}
export const FontAwesomeColor= () => {
    return <FontAwesomeIcon icon={faCommentDots} style={{color: '#ffffff'}} />
}
export const FontAwesomeSize= () => {
    return (
        <div>
            <FontAwesomeIcon icon={faFolder} style={{color: '#ffffff',fontSize: '24px'}} />
            <FontAwesomeIcon icon={faStickyNote} style={{color: '#ffffff',fontSize: '36px'}} />
            <FontAwesomeIcon icon={faCommentDots} style={{color: '#ffffff',fontSize: '48px'}} />

        </div>
    )
}
