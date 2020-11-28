import React from "react";
import Input from "./index";
import Icon from "../Icon";

import {ReactComponent as ClipIcon} from "../../assets/icon/clip.svg";
import {ReactComponent as SmlieIcon} from "../../assets/icon/smile.svg";

export default {
    title: "UI组件/Input",
    component: Input
}

export const Default = () => {
    return <Input/>
}

export const Search = () => <Input.Search />

export const WithAffix = () => (
    <Input
        prefix={<Icon icon={ClipIcon} color="#cccccc" />}
        suffix={<Icon icon={SmlieIcon} color="#cccccc" />}
        />
)

export const InputTextWithLabel = () => <Input.Text label={'昵称'} />

export const InputTextWithoutLabel = () => <Input.Text />
