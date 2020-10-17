import React from "react";
import ChatBubble from "./index";

export default {
    title: "UI组件/ChatBubble",
    component: ChatBubble,
    decorators: [storyFn => <div style={{ padding: "24px" }}>{ storyFn() }</div> ]
}

export const FromOthers = () => {
    return <ChatBubble time={"昨天 下午14:26"}>这是一条测试的消息</ChatBubble>
}

export const Mine = () => {
    return <ChatBubble type={"mine"} time={"昨天 下午14:26"}>这是一条测试的消息</ChatBubble>
}

export const ManyDifferentChat = () => {
    return (
        <>
            <ChatBubble type={"mine"} time={"昨天 下午14:26"}>这是一条测试的消息</ChatBubble>
            <ChatBubble type={""} time={"昨天 下午14:27"}>这是一条测试的消息</ChatBubble>
            <ChatBubble type={"mine"} time={"昨天 下午14:28"}>这是一条测试的消息</ChatBubble>
            <ChatBubble type={"mine"} time={"昨天 下午14:29"}>这是一条测试的消息</ChatBubble>
            <ChatBubble type={""} time={"昨天 下午14:30"}>这是一条测试的消息</ChatBubble>
        </>
    )
}

