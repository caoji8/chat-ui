
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import StyledChatApp, {Content, Drawer, Nav, Sidebar} from "./style";
import NavBar from "../NavBar";
import MessageList from "../MessageList";
import Conversation from "../Conversation";
import Profile from "../Profile";
import ContactList from "../ContactList";
import FileList from "../FileList";
import NoteList from "../NoteList";
import EditProfile from "../EditProfile";
import { Route, Switch,useLocation } from "react-router-dom";
import Settings from "../Settings";
import BlockedList from "../BlockedList";
import VideoCall from "../VideoCall";
import {useTransition,animated} from "react-spring";


function ChatApp ({onAvatarClick, children, ...rest}) {
        const [showDrawer, setShowDrawer] = useState(false)
        const [videoCalling, setVideoCalling] = useState(false)
        const location = useLocation();
        //判断一级路由
        const getFirstSgmtPath = (location) => location.pathname.split("/")[1]
        const transitions = useTransition(location, getFirstSgmtPath, {
            from: { opacity: 0, transform: "translate3d(-100px, 0, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            leave: { opacity: 0, transform: "translate3d(-100px, 0,1)" }
        })

        return (
            <StyledChatApp { ...rest }>
                <Nav>
                    <NavBar />
                </Nav>
                <Sidebar>
                    {/*exact 完全匹配*/}
                    {transitions.map(({item: location, props, key}) => (
                    <animated.div key={key} style={props}>
                        <Switch location={location}>
                        <Route exact path={'/'}>
                            <MessageList />
                        </Route>
                        <Route exact path={'/contacts'}>
                            <ContactList />
                        </Route>
                        <Route exact path={'/files'}>
                            <FileList />
                        </Route>
                        <Route exact path={'/notes'}>
                            <NoteList />
                        </Route>
                        <Route  path={'/settings'}>
                            <EditProfile />
                        </Route>
                    </Switch>
                </animated.div>
                    ))}
                </Sidebar>
                <Content>
                    {videoCalling && <VideoCall onHangOffClicked={() => setVideoCalling(false)} />}
                    <Switch>
                        <Route exact path={'/settings'}>
                            <Settings />
                        </Route>
                        <Route exact path={'/settings/blocked'}>
                            <BlockedList />
                        </Route>
                        <Route exact path={'/'}>
                            <Conversation
                                onAvatarClick={() => setShowDrawer(true)}
                                onVideoClicked={() => setVideoCalling(true)} />
                        </Route>
                    </Switch>
                </Content>
                <Drawer show={showDrawer}>
                    <Profile onCloseClick={() => setShowDrawer(false)} />
                </Drawer>
            </StyledChatApp>
        );
}

ChatApp.propTypes = {
    children: PropTypes.any
};

export default ChatApp;
