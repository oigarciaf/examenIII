import { useState } from 'react';
import React from 'react'

function AddPanel() {
  return (
    <div>
      <label htmlFor="taskName">Panel</label>
      <input type="text" name="name" placeholder='New Panel Name'/> 
    </div>
    
  )
}

export default AddPanel