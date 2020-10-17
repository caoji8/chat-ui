
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


function TitleBar ({children, ...rest}) {
        return (
            <StyledTitleBar { ...rest }>
                <Avatar src={face1} status={'offline'} />
                <Title>
                    <Paragraph size={"large"}>测试离线用户</Paragraph>
                    <Paragraph type={"secondary"}>
                        <Text>离线</Text>
                        <Text>最后阅读: 3小时前</Text>
                    </Paragraph>
                </Title>
                <Actions>
                    <Icon opacity={0.3} icon={Call} />
                    <Icon opacity={0.3} icon={Camera} />
                    <Icon opacity={0.3} icon={Options} />
                </Actions>
            </StyledTitleBar>
        );
}

TitleBar.propTypes = {
    children: PropTypes.any
};

export default TitleBar;
