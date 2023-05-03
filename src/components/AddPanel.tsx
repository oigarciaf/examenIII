import React, { useState } from 'react';
import { AddPanelProps } from '../interfaces/IAddPanel';
function AddPanel(props:AddPanelProps) {
  
  const [panelTitle, setPanelTitle] = useState('');
  const [error, setError] = useState('');
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formattedTitle = panelTitle.trim().toLowerCase();
    const panelExists = props.panels && props.panels.some(
      (panel) => panel.trim().toLowerCase() === formattedTitle
    );
    if (!panelExists) {
      props.addPanel(formattedTitle); 
      setPanelTitle('');
      setError('');
    } else {
      setError('Panel ya existe');
    }
  };

  
  

  return (
    <div>
      <h2>Agregar nuevo Panel</h2>
      <form className='add' onSubmit={handleSubmit}>
        <label htmlFor="newpanel">Panel:</label>
        <input
          type="text"
          id="newpanel"
          name="newpanel"
          placeholder="New Panel Name"
          value={panelTitle}
          onChange={(e) => setPanelTitle(e.target.value)}
        />
        {!panelTitle.trim() ? null : props.panels && props.panels.some(
          (panel) => panel.trim().toLowerCase() === panelTitle.trim().toLowerCase()
        ) ? (
          <p style={{ color: 'red' }}>Panel ya existe</p>
        ) : (
          <button type="submit">Add</button>
        )}
        
      </form>
    </div>
  );
}

export default AddPanel;
