
import React from 'react';
import PropTypes from 'prop-types';
import StyledBlockedList, {
    BlockedAvatar,
    BlockedName,
    ClosableAvatar,
    CloseIcon,
    FriendList,
    SettingsMenu
} from "./style";
import Icon from "../Icon";
import Text from "../Text";
import {useHistory} from 'react-router-dom'

import {ReactComponent as ArrowMenuLeft} from '../../assets/icon/arrowMenuLeft.svg'
import {ReactComponent as closeCircle} from '../../assets/icon/closeCircle.svg'

// 导入macro 使用css
import 'styled-components/macro'

import blockedData from '../../data/blocked'

function BlockedList ({children, ...rest}) {
        const history = useHistory()
        return (
            <StyledBlockedList { ...rest }>
                <SettingsMenu>
                    <Icon icon={ArrowMenuLeft} css={`cursor: pointer`} onClick={() => history.goBack()} />
                    <Text
                         size={'xxlarge'}>已屏蔽的好友</Text>
                </SettingsMenu>
                <FriendList>
                    {blockedData.map((user, i) => {
                        return (
                            <ClosableAvatar key={user.id}>
                                <BlockedAvatar size={'105px'} src={user.avatar} />
                                <CloseIcon width={46} height={51} icon={closeCircle} />
                                <BlockedName>{user.name}</BlockedName>
                            </ClosableAvatar>
                        )
                    })}
                </FriendList>
            </StyledBlockedList>
        );
}

BlockedList.propTypes = {
    children: PropTypes.any
};

export default BlockedList;
