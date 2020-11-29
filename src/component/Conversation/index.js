
import React from 'react';
import PropTypes from 'prop-types';
import StyledConversation, {MyChatBubble, Conversations} from "./style";
import TitleBar from "../TitleBar";
import ChatBubble from "../ChatBubble";
import VoiceMessage from "../VoiceMessage";
import Emoji from "../Emoji";
import Footer from "../Footer";
import {useSpring} from "react-spring";

function Conversation ({onAvatarClick, onVideoClicked,children, ...rest}) {
        //设置使用单一动画
        const tBarAnimeProps = useSpring({
            opacity: 1,
            transform: "translate3d(0px, 0px, 0px)",
            from: { opacity: 0, transform: "translate3d(0px, -50px, 0px)" },
            delay: 500
        })

        const convsAnimeProps = useSpring({
            opacity: 1,
            transform: "translate3d(0px,0px,0px)",
            from: { opacity: 0, transform: "translate3d(50px, 0px, 0px)" },
            delay: 800
        })

        const ftAnimeProps = useSpring({
            opacity: 1,
            transform: "translate3d(0px, 0px, 0px)",
            from: { opacity: 0, transform: "translate3d(0px, 50px, 0px)" },
            delay: 950
        })

        return (
            <StyledConversation { ...rest }>
                <TitleBar
                    onVideoClicked={onVideoClicked}
                    onAvatarClick={onAvatarClick}
                    animeProps={tBarAnimeProps} />

                <Conversations style={convsAnimeProps}>
                    <ChatBubble time={'昨天 下午14:26'}>Hi World</ChatBubble>
                    <MyChatBubble time={"昨天 下午14:28"}>
                        Hello This is my message
                    </MyChatBubble>
                    <ChatBubble time={'昨天 下午18:30'}>
                        <VoiceMessage time={"01:24"}/>
                    </ChatBubble>
                    <MyChatBubble time={"昨天 下午16:30"}>
                        哈哈哈 好的
                        <Emoji label={"smile"}>✌</Emoji>
                    </MyChatBubble>
                </Conversations>
                <Footer animeProps={ftAnimeProps} />
            </StyledConversation>
        );
}

Conversation.propTypes = {
    children: PropTypes.any
};

export default Conversation;
