import React from "react";
import { useState , useEffect } from 'react';
import { IFilterProps} from '../interfaces/IFilter'



const Filter = ({ filter, onChange}: IFilterProps) => {
  
  return (
    <div>
      <label htmlFor="filter"> Filtro: </label>

      <select id="filter" value={filter} onChange={onChange}>
      <option value="">Seleccione un equipo</option>
        <option value="Development">Development</option>
        <option value="QA">QA</option>
          <option value="PMs">PMs</option>
          <option value="BI">BI</option>
      </select>

  
    </div>
  );
};


  

export default Filter;


//const Filter = ({ filter, onChange }: IFilterProps) => {
 //   return (
 //     <div>
 //       <label htmlFor="filter">Filtro:</label>
 // 
 //       <input type="text" id="filter" value={filter} onChange={onChange} />
 //    
 //     </div>
 //   );
 // };



