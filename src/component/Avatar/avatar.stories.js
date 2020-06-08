import Avatar from "./index";
import React from "react";
import face1 from '../../assets/images/face-1.jpg'
import face2 from '../../assets/images/face-2.jpg'
import face3 from '../../assets/images/face-3.jpg'
import face4 from '../../assets/images/face-4.jpg'
import face5 from '../../assets/images/face-5.jpg'

export default {
    title: "UI 组件/Avatar",
    component: Avatar
}

export const Default = () => {
    return <Avatar src={face1}/>
}

export const Sizes = () => {
    return (
        <div className="row-elements">
        <h5>不同大小的头像</h5>
        <Avatar src={face2} size='48px' />
        <Avatar src={face3} size='56px' />
        <Avatar src={face4} size='64px' />
        <Avatar src={face5} size='72px' />
        </div>)
}
export const WithStatus = () => {
    return (
        <div className='row-elements'>
        <h5>带有状态的头像</h5>
        <Avatar src={face2} status='online' />
        <Avatar src={face3} status='offline' />
        <Avatar src={face4} size='64px' status='online' />
        <Avatar src={face5} size='72px' status='offline' statusIconSize='12px' />
        </div>)
}
