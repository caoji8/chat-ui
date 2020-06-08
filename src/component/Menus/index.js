import React from 'react';
import PropTypes from 'prop-types';
import StyledMenus, {MenusClip, StatusIcon} from "./style";

// rscp 快速创建

const Menus = ({ name, ...rest}) => {
    return (
        <StyledMenus {...rest}>
            <StatusIcon />
                <MenusClip>
                    hello world
                </MenusClip>
        </StyledMenus>
    );
};

Menus.propTypes = {

};

export default Menus;
