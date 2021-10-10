import React from 'react';
import s from "./Dialogs.module.css";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>
                    Valeriy
                </div>
                <div className={s.dialog}>
                    Olya
                </div>
                <div className={s.dialog}>
                    Nikita
                </div>
                <div className={s.dialog}>
                    Phillip
                </div>
                <div className={s.dialog}>
                    Kostya
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>F*ck</div>
                <div className={s.message}>Nice to meet you</div>
            </div>
        </div>
    )
}