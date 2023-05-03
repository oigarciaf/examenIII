import { useState } from 'react';

import { IPanelProps } from '../interfaces/IPanel'
import Card from './Card'

function Panel(props: IPanelProps & {showRemoveButton: boolean , isPanelOccupied: boolean }) {
    ;

    const handleRemovePanel = () => {
        props.removePanel(props.title);
    }
    return (
        <div className="columna">
            <h2> { props.title } </h2>
            {props.tasks.length > 0 ? (
        props.tasks.map((task) => (
          <Card
            key={task.id}
            task={task}
            changeStatus={props.changeStatus}
            deleteTask={props.deleteTask}
            statusOptions={props.statusOptions}
          />
        ))
      ) : (
        <p>No hay tareas en este panel</p>
      )}
      {!props.isPanelOccupied && props.tasks.length === 0  && props.showRemoveButton && (
        <button className="remove" onClick={handleRemovePanel}>
          Eliminar
        </button>
      )}

        </div>
    )
}

export default Panel;

