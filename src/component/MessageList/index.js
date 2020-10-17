
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

function MessageList ({children, ...rest}) {
        return (
            <StyledMessageList { ...rest }>
                <Input.Search />
                <ChatFilter />
                <ChatList>
                    {[1,2,3,4,5,6].map((_, index) => (
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
                    ))}
                </ChatList>
            </StyledMessageList>
        );
}

function ChatFilter() {
    return (
        <Filter style={{padding: "20px 0"}} >
            <Filter.Filters label="列表排序">
                <Select>
                    <Option>最新消息优先</Option>
                    <Option>在线好友优先</Option>
                </Select>
            </Filter.Filters>

            <Filter.Action label={"创建会话"}>
                <Button>
                    <Icon icon={Plus} width={12} height={12} />
                </Button>
            </Filter.Action>
        </Filter>
    )
}

MessageList.propTypes = {
    children: PropTypes.any
};

export default MessageList;
