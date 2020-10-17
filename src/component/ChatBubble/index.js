
import React from 'react';
import PropTypes from 'prop-types';
import StyledChatBubble, {Bubble, BubbleTip, MessageText, Time} from "./style";

import { ReactComponent as BubbleTipIcon } from "../../assets/icon/bubbleTip.svg";

/*
* @params type 发送人状态
* @params time 发送时间
* */
function ChatBubble ({children, type, time,...rest}) {
        return (
            <StyledChatBubble type={type} { ...rest }>
                <Bubble>
                    <BubbleTip icon={BubbleTipIcon} width={40} height={20} color={"white"} />
                    <MessageText>{ children }</MessageText>
                </Bubble>
                <Time>{ time }</Time>
            </StyledChatBubble>
        );
}

ChatBubble.propTypes = {
    children: PropTypes.any,
    type: PropTypes.oneOf(['mine']),
    time: PropTypes.string,
};

export default ChatBubble;
