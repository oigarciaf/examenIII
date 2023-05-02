import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { ITask } from './interfaces/ITask'
import { IFilterProps } from './interfaces/IFilter'
import TaskForm from './components/TaskForm'
import Panel from './components/Panel'
import AddPanel from './components/AddPanel';
import Filter from './components/Filter';



function App() {

  const [id, setId] = useState<number>(0)
  const [task, setTask] = useState<ITask>({ "status": "TODO", "id": 0 })
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [teams, setTeams] = useState<string[]>(["Development", "QA", "PMs", "BI"])
  const [panels, setPanels] = useState<string[]>(['Tareas en progreso', 'Tareas Completadas']);
  const [filter, setFilter] = useState<string>("");
  const statusOptions: string[] = ["TODO", ...panels];
  const [isPanelOccupied, setIsPanelOccupied] = useState<boolean>(false);

  /**#######################33   */
  const handleAddPanel = (title: string) => {
    setPanels([...panels, title]);
    setTask({ ...task, status: title });
  }
  /**#######################  */
  
  /**#######################  */

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  const changeStatus = (id: number, status: string) => {
    const newTaskList = taskList.map((task) => {
      if (task.id === id) {
        task.status = status
      }
      return task
    })
    setTaskList(newTaskList)
  }

  const deleteTask = (id: number) => {
    const newTaskList = taskList.filter(task => task.id !== id)
    setTaskList(newTaskList)
  }

  const addTask = () => {

    setTaskList([...taskList, task])
    const newId: number = id + 1
    setId(newId)

    setTask({
      "id": newId
      , "status": "TODO"
      , "name": ""
      , "team": ""
      , "hours": 0
    })
  }
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
    setIsPanelOccupied(filteredTasks.length > 0);
  };
/**Eliminar panel */
  /**##################################### */

    const removePanel = (title: string) => {
    const newPanels = panels.filter((panelTitle) => panelTitle !== title);
    setPanels(newPanels);
  };
  /**##################################### */
 
  const filteredTasks = taskList.filter(
    (task) =>
      task.name?.toLowerCase().includes(filter.toLowerCase()) ||
      task.team?.toLowerCase().includes(filter.toLowerCase())
  );

          
  return (
    <div className="App">

      <header>
        <h1>TODO List</h1>
      </header>

      <div className="container">
        
      <AddPanel addPanel={handleAddPanel} panels={panels || []} />

        <TaskForm
          task={task}
          teams={teams}
          onChangeInput={handleInputChange}
          onChangeSelect={handleSelectChange}
          onSave={addTask}
        />

        <div className="columnas">  
        
        <Panel
  title={"TODO"}
  statusOptions={statusOptions}
  tasks={filteredTasks.filter((task) => task.status === "TODO")}
  changeStatus={changeStatus}
  deleteTask={deleteTask}
  showRemoveButton={false}
  removePanel={removePanel}
  isPanelOccupied={isPanelOccupied}
/>
{panels.map((panelTitle) => (
  <Panel
    key={panelTitle}
    statusOptions={statusOptions}
    title={panelTitle}
    tasks={filteredTasks.filter((task) => task.status === panelTitle)}
    changeStatus={changeStatus}
    deleteTask={deleteTask}
    showRemoveButton={true}
    removePanel={removePanel}
    isPanelOccupied={isPanelOccupied}
  />
))}

      <div>

        
      </div>
        </div>
        
      </div>
      <div className="columnas">
        <Filter filter={filter} onChange={handleFilterChange} />
        </div>
    </div>
  );
}

export default App;
