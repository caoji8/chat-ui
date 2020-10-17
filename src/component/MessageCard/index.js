
import React from 'react';
import PropTypes from 'prop-types';
import StyledMessageCard, {Message, MessageText, Name, Status, Time, UnreadBadge} from "./style";
import Avatar from "../Avatar";
import {useTheme} from "styled-components";
import Icon from "../Icon";

import { ReactComponent as Replied} from "../../assets/icon/replied.svg";

/*
* @params avatarSrc 头像地址
* @params avatarStatus 头像在线状态
* @params statusText 头像在线状态文字描述
* @params name 昵称
* @params time 时间
* @params message 消息内容
* @params unreadCount 未读消息数
* @params active 是否为激活状态
* @params replied 是否已回复
* */
function MessageCard ({
                          children,
                          avatarSrc,
                          avatarStatus,
                          statusText,
                          name,
                          time,
                          message,
                          unreadCount,
                          active,
                          replied,
                          ...rest}) {

        const theme = useTheme()

        return (
            <StyledMessageCard active={active} { ...rest }>
                <Avatar src={avatarSrc} status={avatarStatus} />
                <Name>{name}</Name>
                <Status>{statusText}</Status>
                <Time>{time}</Time>
                <Message replied={replied}>
                    {replied && (
                        <Icon
                            width={16}
                            height={14}
                            icon={Replied}
                            color={active ? theme.inactiveColorDark : theme.inactiveColor}
                            opacity={active ? 0.4 : 1}
                            style={{
                                justifyContent: 'start',
                            }} />
                    )}
                    <MessageText>{message}</MessageText>
                    <UnreadBadge count={unreadCount} />
                </Message>
            </StyledMessageCard>
        );
}

MessageCard.propTypes = {
    children: PropTypes.any,
    avatarSrc: PropTypes.string.isRequired,
    avatarStatus: PropTypes.any,
    statusText: PropTypes.any,
    name: PropTypes.any,
    time: PropTypes.any,
    unreadCount: PropTypes.number,
    active: PropTypes.bool,
    replied: PropTypes.bool,
};

export default MessageCard;
