import React from "react";
import Select from "./index";
import Option from "../Option";

export default {
    title: "UI组件/Select",
    component: Select
}

export const Default = () => (
    <Select>
        <Option>最新消息优先</Option>
        <Option>在线好友优先</Option>
    </Select>
);
