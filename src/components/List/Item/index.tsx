import React from "react";
import { ITarefa } from "../../../Types/tasks";
import style from '../List.module.scss';

interface Props extends ITarefa {
    selectTask: (tarefaSelecionada: ITarefa) => void;
}

function Item(props: Props){
    
    return(
        <li className={`${style.item} ${props.selected ? style.itemSelecionado : ''} ${props.completed ? style.itemCompletado : ''}`} onClick={() => !props.completed && props.selectTask(props)}>
        <h3>
            {props.tarefa}
        </h3>
        <span>
            {props.tempo}
        </span>
        {props.completed && <span className={style.concluido} aria-label="tarefa completada"></span>}
    </li>
    )
}

export default Item;