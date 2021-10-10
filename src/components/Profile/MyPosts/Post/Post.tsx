import React from 'react';
import s from './Post.module.css'

export const Post = (props: any) => {
    return (
        <div className={s.item}>
            <img src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png" alt=""/>
            {props.message}
            <div>
            <span>{props.likeCounts} like</span>
            </div>
        </div>
    )
}