import React from "react";
import Button from "./index";

import { ReactComponent as Plus } from "../../assets/icon/plus.svg";
import Icon from "../Icon";

export default {
    title: "UI组件/Button",
    component: Button
}

export const ReactButton = () => {
    return <Button shape={'rect'}>默认</Button>
}

export const CircleButton = () => (
    <Button>
        <Icon icon={Plus} width={12} height={12} />
    </Button>
)
