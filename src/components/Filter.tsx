import React from "react";
import { useState , useEffect } from 'react';
import { IFilterProps} from '../interfaces/IFilter'



const Filter = ({ filter, onChange}: IFilterProps) => {
  
  return (
<div><h2>Filtros</h2>
<div>
        
    <form className="add">
      <label htmlFor="filter"> Equipo: </label>

      <select id="filter" value={filter} onChange={onChange}>
      <option value=""> Todos</option>
        <option value="Development">Development</option>
        <option value="QA">QA</option>
          <option value="PMs">PMs</option>
          <option value="BI">BI</option>
      </select>

  
    </form>
    </div></div>
  );
};


  

export default Filter;
