import React from 'react';

import { Container } from './styles';

//TROCAR ISSO PARA UMA DIV

export default function TaskTable({tasks, deleteTask, editTask}) {
  return (
    <Container>
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
                    <button onClick={() => editTask(task)}>Editar</button>
                    <button onClick={() => deleteTask(task.id)}>Apagar</button>
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
