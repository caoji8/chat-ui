import React from 'react';
import PropTypes from 'prop-types';
import StyledAvatar, {AvatarClip, AvatarImage, StatusIcon} from "./style";

function Avatar ({src, size='48px', status, statusIconSize='8px', ...rest}) {
        return (
            <StyledAvatar { ...rest }>
                { status && (
                    <StatusIcon status={status} size={statusIconSize}/>
                ) }
                <AvatarClip size={size}>
                    <AvatarImage src={ src } alt="头像"/>
                </AvatarClip>
            </StyledAvatar>
        );
}

// props 规范
// key name
// value 规范
// isRequired 必填属性
// oneOf 接口限定
Avatar.propTypes = {

    src: PropTypes.string.isRequired,
    size: PropTypes.string,
    status: PropTypes.oneOf(['online', 'offline']),
    statusIconSize: PropTypes.string
};

export default Avatar;
