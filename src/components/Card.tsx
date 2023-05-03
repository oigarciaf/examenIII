import { useState } from 'react';
import { ICard } from '../interfaces/ICard';

function Card(props: ICard  & {statusOptions: string[]} ) {

    const [status, setStatus] = useState<string>(props.task.status ? props.task.status : 'TODO')

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStatus(e.target.value)
        props.changeStatus(props.task.id, e.target.value)
    }

    // Calculate remaining days until task end date
    const enddate = props.task.enddate ? new Date(props.task.enddate) : undefined;
    const remainingDays = enddate ? Math.ceil((enddate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)) : undefined;
    // Determine if task is overdue or needs a reminder
   
    let message = '';
    if (remainingDays !== undefined) {
        if (remainingDays < 0) {
            message = '¡Tarea expirada!';
        } else if (remainingDays === 1 && props.task.status === 'TODO') {
            message = '¡Recuerda completar esta tarea mañana!';
        }
    }
    
    return (

        <div className="card">
            <div className="card-item">
                <span>Id:</span>
                <p>{props.task.id}</p>
            </div>
            <div className="card-item">
                <span>Tarea:</span>
                <p>{props.task.name}</p>
            </div>
            <div className="card-item">
                <span>Team:</span>
                <p>{props.task.team}</p>
            </div>
            <div className="card-item">
                <span>Fecha Inicio:</span>
                <p>{props.task.startdate ? new Date(props.task.startdate).toISOString().substr(0, 10).split('T')[0] : ''}</p>
            </div>
            <div className="card-item">
                <span>Fecha Fin:</span>
                <p>{props.task.enddate ? new Date(props.task.enddate).toISOString().substr(0, 10).split('T')[0] : ''}</p>
            </div>
            <div className="card-item">
                <span>Horas:</span>
                <p>{props.task.hours}</p>
            </div>
            <div className="card-item">
                <span>Estado:</span>
                <p>
                    <select value={status} onChange={handleSelectChange} name="estado">
                        {props.statusOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </p>
                
            </div>
            {message && <div className="card-item">
                <span>Recordatorio:</span>
                <p>{message}</p>
            </div>}
            <button className="delete-btn" onClick={() => props.deleteTask(props.task.id)} >x</button>
        </div>

    )

}

export default Card;
