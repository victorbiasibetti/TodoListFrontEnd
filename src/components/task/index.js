import React, { useState, useEffect } from 'react';

import api from '../../services/api'

import { Container } from './styles';

export default function TaskForm({taskEdit, addTask, editTaskArray}) {
  
  const initialTask = { 
    title: '', 
    description: '', 
    status: false 
  }
  
  const [task, setTask] = useState(initialTask)
  

  function handleInputChange (event) {
    const { name, value } = event.target

    if(name === 'status')
    {
      setTask({ ...task, [name]: !task.status })  
    }
    else
    {
      setTask({ ...task, [name]: value })
    }
    
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (!task.title || !task.description ) return
    
    console.log('taskEdit', taskEdit)
    const response = taskEdit.id == null ? 
      await api.post('/v1/tasks', task) : 
      await api.put(`/v1/tasks/${task.id}`, task)
    

    setTask(initialTask)

    if(taskEdit.id == null)
      addTask(response.data)
    else
      editTaskArray(response.data)
      

  }

  useEffect(() => {
    setTask(taskEdit)
    
  }, [taskEdit])
  return (
    <Container onSubmit={handleSubmit}>
      <label>Título</label>
      <input 
        type="text" 
        name="title" 
        placeholder="Mínimo 3 caracteres"
        value={task.title} 
        onChange={handleInputChange} />
      <label>Descrição</label>
      <input 
        type="text" 
        name="description" 
        placeholder="Mínimo 5 caracteres"
        value={task.description} 
        onChange={handleInputChange} />
      <label>Concluída</label>
      <input 
        type="checkbox" 
        name="status" 
        checked={task.status}
        value={task.status} 
        onChange={handleInputChange} />
      <button>Salvar</button>
    </Container>
  )
}
