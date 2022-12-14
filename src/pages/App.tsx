import React, { useState } from 'react';
import Form from '../components/Form'
import List from '../components/List';
import Timer from '../components/Timer';
import { ITarefa } from '../Types/tasks';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selectTask(tarefaSeleceionada: ITarefa){
    setSelecionado(tarefaSeleceionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selected: tarefa.id === tarefaSeleceionada.id ? true : false
    })));
  }

  function endTask(){
    if(selecionado){
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id){
          return {
            ...tarefa,
            selected: false,
            completed: true,
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List 
        tarefas={tarefas}
        selectTask={selectTask} 
      />
      <Timer 
        selecionado={selecionado} 
        endTask={endTask}
      />
    </div>
  );
}

export default App;
