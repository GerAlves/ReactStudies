import React from "react";
import Item from "./Item";
import style from './List.module.scss'
import { ITarefa } from "../../Types/tasks";

interface Props {
    tarefas: ITarefa[],
    selectTask: (tarefaSelecionada: ITarefa) => void;   
}

function List({ tarefas, selectTask }: Props){ 
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item
                        selectTask={selectTask}  
                        key={item.id}
                        tarefa={item.tarefa} 
                        tempo={item.tempo}
                        selected={item.selected}
                        completed={item.completed}
                        id={item.id} 
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;