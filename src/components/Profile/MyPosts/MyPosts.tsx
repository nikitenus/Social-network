import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.content}>
            <div>
                My post
                <div>
                    New post
                </div>
                <Post message={"Hi, how are you?"} likeCounts={6}/>
                <Post message={"I am fine thank you!"} likeCounts={3}/>
            </div>
        </div>
    )
}