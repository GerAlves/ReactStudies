import React from "react";
import style from './Clock.module.scss'

interface Props{
    time: number | undefined;
}

export default function Clock({time = 0} : Props) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteDec, minuteUni] = String(minutes).padStart(2, '0');
    const [secondsDec, secondsUni] = String(seconds).padStart(2, '0');

    return(
        <>
            <span className={style.relogioNumero} >{minuteDec}</span>
            <span className={style.relogioNumero} >{minuteUni}</span>
            <span className={style.relogioDivisao} >:</span>
            <span className={style.relogioNumero} >{secondsDec}</span>
            <span className={style.relogioNumero} >{secondsUni}</span>          
        </>
    )
}