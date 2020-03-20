import React from 'react';

import { Container } from './styles';

export default function TaskTable({tasks, deleteTask, editTask}) {
  return (
    <Container>
      <h2>Lista de Tarefas</h2>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descrição</th>
            <th>Completa</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.length > 0 ? (
              tasks.map(task => (
                <tr key={task.id}>
                  <td>{task.title} </td>
                  <td>{task.description} </td>
                  <td>{task.status ? 'OK' : ''} </td>
                  <td>
                    <button onClick={() => editTask(task)} className="edit">Editar</button>
                    <button onClick={() => deleteTask(task.id)} className="delete">Apagar</button>
                  </td>
                </tr>
              ))
            ) 
            : 
            (
            <tr>
              <td colSpan={4}>Sem tarefas</td>
            </tr>
            )
          }
          
        </tbody>
      </table>
    </Container>
  );
}
