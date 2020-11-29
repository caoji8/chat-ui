import React from "react";
import Profile from "./index";

export default {
    title: "页面组件/Profile",
    component: Profile
}

export const Default = () => {
    return <Profile status={'online'} />
}

