import React from 'react';
import PropTypes from 'prop-types';
import StyledProfile, {Album, AlbumSection, AlbumTitle, CloseIcon, ContactSection, Photo, SocialLinks} from "./style";
import "styled-components/macro"
import face from '../../assets/images/face-3.jpg'
import Avatar from "../Avatar";
import Paragraph from "../Paragraph";
import Emoji from "../Emoji";
import Icon from "../Icon";
import {faGithub, faLinkedin, faWeibo} from "@fortawesome/free-brands-svg-icons";
import Seperator from "../Seperator";
import Text from "../Text";

import photo1 from '../../assets/images/photo1.png'
import photo2 from '../../assets/images/photo2.png'
import photo3 from '../../assets/images/photo3.jpg'
import { ReactComponent as Cross} from '../../assets/icon/cross.svg'
import Button from "../Button";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Profile ({
                      showEditBtn,
                      showCloseIcon = true,
                      onCloseClick,
                      onEdit,
                      status,
                      children,
                      ...rest}) {
        return (
            <StyledProfile { ...rest }>
                {showCloseIcon && <CloseIcon icon={Cross} onClick={onCloseClick} />}
                <Avatar
                    src={face}
                    css={`margin: 26px 0;grid-area: 1 / 1 / 3 / 2`}
                    size={"160px"}
                    status={status}
                    statusIconSize={'25px'} />

                {
                    showEditBtn && (
                        <Button
                            size={'52px'}
                            onClick={onEdit}
                            css={`grid-area: 1/1/3/2;align-self: end;margin-left: 100px;z-index: 10`}>
                            <FontAwesomeIcon
                                css={`font-size: 24px`}
                                icon={faPen} />
                        </Button>
                    )
                }

                <Paragraph
                    size={'xlarge'}
                    css={`margin-bottom: 12px;`}>
                    测试昵称
                </Paragraph>
                <Paragraph
                    size={'medium'}
                    type={'secondary'}
                    css={`margin-bottom: 18px;`}
                    >
                    北京 朝阳区
                </Paragraph>
                <Paragraph
                    css={`margin-bottom: 26px;`}>
                    帮助客户构建网站，并协助再社交网站上进行推广{" "}
                    <Emoji label={'fire'}>💥</Emoji>
                </Paragraph>
                <SocialLinks>
                    <Icon.Social icon={faWeibo} href={"https://www.weibo.com"} bgColor={'#F06767'} />
                    <Icon.Social icon={faGithub} href={"https://www.github.com"} bgColor={'black'} />
                    <Icon.Social icon={faLinkedin} bgColor={'#2483C0'} />
                </SocialLinks>
                <Seperator
                    css={`
                        margin: 30px 0;
                      `}
                    />
                <ContactSection>
                    <Description label={'联系电话'}>+86 17501455624</Description>
                    <Description label={'电子邮箱'}>admin@qq.com</Description>
                    <Description label={'个人网站'}>https://www.github.com</Description>
                </ContactSection>

                <Seperator
                    css={`
                        margin: 30px 0;
                      `}
                />
                <AlbumSection>
                    <AlbumTitle>
                        <Text type={'secondary'}>相册（31）</Text>
                        <a>查看全部</a>
                    </AlbumTitle>
                    <Album>
                        <Photo src={photo1} alt={''} />
                        <Photo src={photo2} alt={''} />
                        <Photo src={photo3} alt={''} />
                    </Album>
                </AlbumSection>
            </StyledProfile>

        );
}
    function Description({ label, children }) {
        return (
            <Paragraph>
                <Text type={'secondary'}>{ label }：</Text>
                <Text>{ children }</Text>
            </Paragraph>
        )
    }

Profile.propTypes = {
    children: PropTypes.any
};

export default Profile;


