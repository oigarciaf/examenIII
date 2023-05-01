import React from "react";
import { useState , useEffect } from 'react';
import { Props } from '../interfaces/IFilter'


const Filter = ({ filter, onChange }: Props) => {
  return (
    <div>
      <label htmlFor="filter">Filtro:</label>
      <input type="text" id="filter" value={filter} onChange={onChange} />
    </div>
  );
};

export default Filter;


