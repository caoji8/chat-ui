/*
* @description 侧边导航栏
* @author zmx
* @since 20/10/09
* */

import React from 'react';
import PropTypes from 'prop-types';
import StyledNavBar, {  MenuIcon, StyledMenuItem,MenuItems } from "./style";
import Badge from "../Badge";
import Avatar from "../Avatar";

import {faCog, faCommentDots, faEllipsisH, faFolder, faStickyNote, faUsers} from "@fortawesome/free-solid-svg-icons";
import profileImage from '../../assets/images/face-1.jpg'

function NavBar({...rest}) {
    return <StyledNavBar {...rest}>
        <Avatar src={profileImage} status="online"/>
        <MenuItems>
            <MenuItem showBadge active icon={faCommentDots}/>
            <MenuItem icon={faUsers} />
            <MenuItem icon={faFolder} />
            <MenuItem icon={faStickyNote} />
            <MenuItem icon={faEllipsisH} />
            <MenuItem icon={faCog} css={`align-self: end`}/>
        </MenuItems>
    </StyledNavBar>;
}

function MenuItem({ icon, active, showBadge, ...rest }) {
    return (
        <StyledMenuItem active={active} {...rest}>
            <a href="#">
                <Badge show={showBadge}>
                    <MenuIcon active={active} icon={icon} />
                </Badge>
            </a>
        </StyledMenuItem>
    );
}

NavBar.propTypes = {};

export default NavBar;

export { MenuItem };
