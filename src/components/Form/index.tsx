import React from "react";
import { ITarefa } from "../../Types/tasks";
import Button from "../Button";
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';

class Form extends React.Component <{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}>  {
    state = {
        tarefa: "",
        tempo: "00:00",
    }

    adicionarTarefa(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        this.props.setTarefas(tarefasAntigas => 
            [...tarefasAntigas, 
                {
                    ...this.state,
                    selected: false,
                    completed: false,
                    id: uuidv4(),
                }
            ]
        );
        this.setState({
            tarefa: "",
            tempo: "00:00",
        })
    }

    render() {
        return(
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        value={this.state.tarefa}
                        onChange={event => this.setState({...this.state, tarefa: event.target.value})}
                        id="tarefa"
                        placeholder="O que você quer estudar"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input 
                        type="time"
                        step="1"
                        name="tempo"
                        value={this.state.tempo}
                        onChange={event => this.setState({...this.state, tempo: event.target.value})}
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button texto="Adicionar" type="submit"/>
            </form>
        )
    }
}

export default Form;