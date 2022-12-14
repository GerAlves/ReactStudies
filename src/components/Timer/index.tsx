import React, { useEffect, useState } from "react";
import { ITarefa } from "../../Types/tasks";
import Button from "../Button";
import { TimeToSeconds } from "../common/utils/time";
import Clock from "./Clock/Index";
import style from "./Timer.module.scss"

interface Props {
    selecionado: ITarefa | undefined;
    endTask: () => void;
}

export default function Timer({selecionado, endTask} : Props){
    const [time, setTime] = useState<number>(0);
    useEffect(() => {
        if(selecionado?.tempo)
            setTime(TimeToSeconds(selecionado.tempo))
    },[selecionado])
    function countdown(counter: number = 0){
        setTimeout(() => {
            if(counter > 0){
                setTime(counter -1)
                return countdown(counter - 1);
            }
            endTask();
        }, 1000)
    }

    return(
       <div className= {style.cronometro} >
        <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
        <div className={style.relogioWrapper}>
            <Clock time={time}/>
        </div>
        
        <Button texto="Começar" onClick={() => countdown(time)} />
       </div> 
    )
}