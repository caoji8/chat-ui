import React from "react";
import Radio from "./index";

export default {
    title: "UI组件/Input/Radio",
    component: Radio
}

export const Default = () => {
    return <Radio>选项</Radio>
}

export const RadioGroup = () => (
    <Radio.Group label={'请选择'}>
        <Radio name={'option'}>选项一</Radio>
        <Radio name={'option'}>选项二</Radio>
        <Radio name={'option'}>选项三</Radio>
    </Radio.Group>
)
