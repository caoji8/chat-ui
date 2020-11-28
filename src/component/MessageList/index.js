
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



function MessageList ({children, ...rest}) {
        //translate3d默认开启Gpu加速
        const trailAnimes = useStaggeredList(6);

        return (
            <StyledMessageList { ...rest }>
                <FilterList options={['最新消息优先','在线好友优先']} actionLabel={'创建会话'}>
                <ChatList>
                    {[1,2,3,4,5,6].map((_, index) => (
                        <animated.div key={index} style={trailAnimes[index]}>
                            <MessageCard
                                avatarSrc={face1}
                                key={index}
                                active={index === 3}
                                replied={ index % 3 ===0 }
                                name={"测试用户"}
                                avatarStatus={"online"}
                                statusText={"在线"}
                                time={"3 小时之前"}
                                message={"测试文案,测试文案,测试文案,测试文案,测试文案,测试文案,测试文案,测试文案,测试文案,测试文案"}
                                unreadCount={2} />
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
