import React from "react";
import ChatBubble from "./index";
import VoiceMessage from "../VoiceMessage";
import Emoji from "../Emoji";

export default {
    title: "UI组件/ChatBubble",
    component: ChatBubble,
    decorators: [storyFn => <div style={{ padding: "24px" }}>{ storyFn() }</div> ]
}

export const FromOthers = () => {
    return <ChatBubble time={"昨天 下午14:26"}>这是一条测试的消息</ChatBubble>
}

export const Mine = () => {
    return <ChatBubble type={"mine"} time={"昨天 下午14:26"}>
        这是一条测试的消息<Emoji label={"smile"}>🙂</Emoji>
    </ChatBubble>
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

export const VoiceMessageType = () => (
    <ChatBubble time={"昨天 下午19:00"}>
        <VoiceMessage time={"20:00"} />
    </ChatBubble>
)

export const VoiceMessageTypeMine = () => (
    <ChatBubble type={"mine"} time={"昨天 下午19:00"}>
        <VoiceMessage type={"mine"} time={"20:00"} />
    </ChatBubble>
)
