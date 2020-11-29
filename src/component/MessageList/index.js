
import React from 'react';
import PropTypes from 'prop-types';
import StyledMessageList, {ChatList} from "./style";
import Filter from "../Filter";
import Select from "../Select";
import Option from "../Option";
import Button from "../Button";
import Icon from "../Icon";
import {ReactComponent as Plus} from "../../assets/icon/plus.svg"
import face1 from "../../assets/images/face-1.jpg"
import Input from "../Input";
import MessageCard from "../MessageCard";
import FilterList from "../FilterList";
import { useTrail, animated } from "react-spring";
import useStaggeredList from "../../hooks/useStaggeredList";
import messageData from "../../data/messages"


function MessageList ({children, ...rest}) {
        //translate3d默认开启Gpu加速
        const trailAnimes = useStaggeredList(6);

        return (
            <StyledMessageList { ...rest }>
                <FilterList options={['最新消息优先','在线好友优先']} actionLabel={'创建会话'}>
                <ChatList>
                    {messageData.map((message, index) => (
                        <animated.div key={message.id} style={trailAnimes[index]}>
                            <MessageCard
                                avatarSrc={message.avatarSrc}
                                key={message.id}
                                active={index === 3}
                                replied={ message.replied }
                                name={message.name}
                                avatarStatus={message.status}
                                statusText={message.statusText}
                                time={message.time}
                                message={message.message}
                                unreadCount={message.unreadCount} />
                        </animated.div>
                    ))}
                </ChatList>
                </FilterList>
            </StyledMessageList>
        );
}



MessageList.propTypes = {
    children: PropTypes.any
};

export default MessageList;
