import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://i.stack.imgur.com/d3Koo.jpg" alt="wall"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}