import React from "react";
import Popover from "./index";
import Button from "../Button";

export default {
    title: "UI组件/Popover",
    component: Popover
}

export const Default = () => (
    <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh"
        }}
    >
        <Popover content={"Hello!"}>
            <Button shape={"rect"}>Click me!</Button>
        </Popover>
    </div>
)

export const WithOffset = () => (
    <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh"
        }}
    >
        <Popover content={"Hello!"} offset={{ x: "-25%" }}>
            <Button shape={"rect"}>Click me!</Button>
        </Popover>
    </div>
)
