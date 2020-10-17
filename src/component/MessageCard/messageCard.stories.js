import React from "react";
import MessageCard from "./index";

import face1 from "../../assets/images/face-1.jpg";

export default {
    title: "UI组件/MessageCard",
    component: MessageCard
}

export const Default = () => (
    <MessageCard
        avatarSrc={face1}
        name='测试用户'
        avatarStatus={'online'}
        statusText={'在线'}
        time={'3 小时之前'}
        message={'测试用信息，测试用信息，测试用信息，测试用信息，测试用信息'}
        unreadCount={2}
    />
)

// 激活状态
export const Active = () => (
    <MessageCard
        avatarSrc={face1}
        name='测试用户'
        avatarStatus={'online'}
        statusText={'在线'}
        time={'3 小时之前'}
        message={'测试用信息，测试用信息，测试用信息，测试用信息，测试用信息'}
        unreadCount={2}
        active
    />
)

// 已回复状态
export const Replied = () => (
    <MessageCard
        avatarSrc={face1}
        name='测试用户'
        avatarStatus={'online'}
        statusText={'在线'}
        time={'3 小时之前'}
        message={'测试用信息，测试用信息，测试用信息，测试用信息，测试用信息'}
        unreadCount={2}
        active
        replied
    />
)

// 激活但未回复
export const RepliedInactive = () => (
    <MessageCard
        avatarSrc={face1}
        name='测试用户'
        avatarStatus={'online'}
        statusText={'在线'}
        time={'3 小时之前'}
        message={'测试用信息，测试用信息，测试用信息，测试用信息，测试用信息'}
        unreadCount={2}
        replied
    />
)

