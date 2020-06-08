import React from "react";
import ElButton from "./index";
import '../../story.css'
import {action} from "@storybook/addon-actions";

export default {
    title: 'ElButton',
    component: ElButton
}

export const Deafult = () => {
    return (
        <ElButton type='normal'>{'默认按钮'}</ElButton>
    )
}
export const Types = () => {
    return (
        <div className="row-elements">
            <ElButton type='normal'>{'朴素按钮'}</ElButton>
            <ElButton type='primary'>{'主要按钮'}</ElButton>
            <ElButton type='success'>{'成功按钮'}</ElButton>
            <ElButton type='message'>{'信息按钮'}</ElButton>
            <ElButton type='warning'>{'警告按钮'}</ElButton>
            <ElButton type='error'>{'危险按钮'}</ElButton>
        </div>
    )
}

export const WithStatus = () => {
    return (
        <div className="row-elements">
            <ElButton type='primary' onClick={action('这是一个事件')}>{'主要按钮'}</ElButton>
        </div>
    )
}

export const RoundType = () => {
    return (
        <div className="row-elements">
            <ElButton type='primary' round={true}>{'主要按钮'}</ElButton>
            <ElButton type='success' round={true}>{'成功按钮'}</ElButton>
            <ElButton type='message' round={true}>{'信息按钮'}</ElButton>
            <ElButton type='warning' round={true}>{'警告按钮'}</ElButton>
            <ElButton type='error' round={true}>{'危险按钮'}</ElButton>
        </div>
    )
}
