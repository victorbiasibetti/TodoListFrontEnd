import React, { useState, useEffect } from 'react';
import api from '../../services/api'

import {Container, Forms} from './styles'

import TaskTable from '../../components/table'
import TaskForm from '../../components/task'

const App = () => {

  const initialTask = { 
    title: '', 
    description: '', 
    status: false 
  }

  const [tasks, setTasks] = useState([])
  const [taskEdit, setTaskEdit] = useState(initialTask)

  useEffect(() => {
    const loadTasks = async () => {
      const response = await api.get('/v1/tasks');
      setTasks(response.data)
    }
    loadTasks();
  }, [])

  async function handleDelete(id){
    const response = await api.delete(`/v1/tasks/${id}`, id)
    
    const removedID = response.data.id;
    
    const index = tasks.findIndex(e => e.id === removedID)
    console.log(index)
    setTasks([...tasks.slice(0, index), ...tasks.slice(index +1)])
  }

  function editTaskArray(taskItem){
    const index = tasks.findIndex((obj => obj.id === taskItem.id))
    setTasks(
      [...tasks.slice(0, index),
        taskItem,
        ...tasks.slice(index + 1)
      ]
    )
    setTaskEdit(initialTask)

  }

  function addTask(taskItem){
    setTasks([...tasks, taskItem])
    setTaskEdit(initialTask)
  }

  function editTask(editTask){
    setTaskEdit(editTask)
  }

  return (
    <Container>
      <h1>Tarefas</h1>
      <Forms>
        <TaskForm 
          addTask={addTask} 
          taskEdit={taskEdit} 
          editTaskArray={editTaskArray}/>
        <TaskTable 
          tasks={tasks} 
          deleteTask={handleDelete} 
          editTask={editTask}/>
      </Forms>
    </Container>
  );
}

export default App;
