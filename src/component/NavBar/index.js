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
import { Link, useLocation, matchPath } from "react-router-dom";

function NavBar({...rest}) {
    return <StyledNavBar {...rest}>
        <Avatar src={profileImage} status="online"/>
        <MenuItems>
            <MenuItem to={'/'} showBadge  icon={faCommentDots}/>
            <MenuItem to={'/contacts'} icon={faUsers} />
            <MenuItem to={'/files'} icon={faFolder} />
            <MenuItem to={'/notes'} icon={faStickyNote} />
            <MenuItem icon={faEllipsisH} />
            <MenuItem to={'/settings'} icon={faCog} css={`align-self: end`}/>
        </MenuItems>
    </StyledNavBar>;
}

function MenuItem({ to, icon, showBadge, ...rest }) {
    const loc = useLocation()
    const active = !!matchPath(loc.pathname, {
        path: to,
        exact: to === '/'
    })

    return (
        <StyledMenuItem active={active} {...rest}>
            <Link to={to}>
                <Badge show={showBadge}>
                    <MenuIcon active={active} icon={icon} />
                </Badge>
            </Link>
        </StyledMenuItem>
    );
}

NavBar.propTypes = {};

export default NavBar;

export { MenuItem };
