
import React from 'react';
import PropTypes from 'prop-types';
import StyledTitleBar, {Actions, Title} from "./style";
import Avatar from "../Avatar";
import Paragraph from "../Paragraph";
import Text from "../Text";
import Icon from "../Icon";

import face1 from '../../assets/images/face-1.jpg'
import { ReactComponent as Call } from "../../assets/icon/call.svg";
import { ReactComponent as Camera } from "../../assets/icon/camera.svg";
import { ReactComponent as Options } from "../../assets/icon/options.svg";
import Dropdown from "../Dropdown";
import {DropdownItem} from "../Dropdown/style";
import Seperator from "../Seperator";


function TitleBar ({animeProps, style,onAvatarClick, onVideoClicked, children, ...rest}) {
        return (
            <StyledTitleBar style={{...style, ...animeProps}} { ...rest }>
                <Avatar onClick={onAvatarClick} src={face1} status={'offline'} />
                <Title>
                    <Paragraph size={"large"}>测试离线用户</Paragraph>
                    <Paragraph type={"secondary"}>
                        <Text>离线</Text>
                        <Text>最后阅读: 3小时前</Text>
                    </Paragraph>
                </Title>
                <Actions>
                    <Icon opacity={0.3} icon={Call} onClick={onVideoClicked} />
                    <Icon opacity={0.3} icon={Camera} />
                    <Dropdown content={
                        <>
                            <DropdownItem>
                                <Paragraph>个人资料</Paragraph>
                            </DropdownItem>
                            <DropdownItem>
                                <Paragraph>关闭会话</Paragraph>
                            </DropdownItem>
                            <Seperator />
                            <DropdownItem>
                                <Paragraph type={'danger'}>屏蔽此人</Paragraph>
                            </DropdownItem>
                        </>
                    }>
                        <Icon opacity={0.3} icon={Options} />
                    </Dropdown>
                </Actions>
            </StyledTitleBar>
        );
}

TitleBar.propTypes = {
    children: PropTypes.any
};

export default TitleBar;
