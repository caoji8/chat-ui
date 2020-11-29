import React from "react";
import Settings, {SettingsItem} from "./index";

export default {
    title: "页面组件/Settings",
    component: Settings
}

export const Default = () => {
    return <Settings />
}

export const WithoutDescription = () => (
    <SettingsItem label={'这是一个没有描述的设置项'} />
)

export const WithDescription = () => (
    <SettingsItem label={'这是一个没有描述的设置项'} description={'这是设置项描述'} />
)

export const WithMenu = () => (
    <SettingsItem label={'有子菜单的设置项'} type={'menu'} />
)
